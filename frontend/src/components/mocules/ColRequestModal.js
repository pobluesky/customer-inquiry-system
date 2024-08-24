import React, { useState, useEffect, useRef } from 'react';
import dompurify from 'dompurify';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import { ColReqResButton } from '../atoms/VocButton';
import {
    Col_Req_Modal_Container,
    Col_Req_Modal,
} from '../../assets/css/Voc.css';
import {
    getCollaborationDetail,
    putDecisionByQuality,
    putCompleteByQuality,
} from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';

export default function ColRequestModal({
    openModal,
    setOpenModal,
    colDetail,
    status,
    setStatus,
    questionId,
    colId,
}) {
    console.log('바로 잘 오나?', colDetail);
    const ROLE = getCookie('userRole');

    const [colStatus, setColStatus] = useState('');
    const [editorValue, setEditorValue] = useState('');
    const [colReply, setColReply] = useState('');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [filePath, setFilePath] = useState('');

    const [tryAccept, isAccepting] = useState(false);
    const [tryReject, isRejecting] = useState(false);
    const [isAccepted, setAccepted] = useState(false);

    const [canEdit, setEdit] = useState(false);
    const fileInputRef = useRef(null);

    const sanitizer = dompurify.sanitize;

    const [height, setHeight] = useState('');

    // 협업 진행 상황별로 모달창 높이 조절
    useEffect(() => {
        if (status === 'READY' && !tryAccept && !tryReject) {
            setHeight('55vh');
        } else if (status !== 'READY' || tryAccept || tryReject) {
            setHeight('85vh');
        }
    }, [status, tryAccept, tryReject]);

    const attachFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const fetchPutCol = async () => {
        console.log(isAccepted);
        try {
            const colData = {
                colReqId: colDetail.colManagerFromResponseDto.userId,
                colResId: colDetail.colManagerToResponseDto.userId,
                colReply: editorValue,
                isAccepted: isAccepted,
            };
            const response = await putDecisionByQuality(
                file,
                colId,
                colData,
                getCookie('accessToken'),
            );
            console.log('협업', isAccepted, '**********', response.data);
            // 협업 수락 또는 거절 후 갱신되는 데이터
            setStatus(response.data.colStatus);
            setColStatus(response.data.colStatus);
            setColReply(response.data.colReply);
            setFileName(response.data.fileName);
            setFilePath(response.data.filePath);
            setAccepted(false);
            setRejected(false);
        } catch (error) {
            console.error('요청 수락/거절 실패:', error);
        }
    };

    const fetchPutColDone = async () => {
        try {
            const response = await putCompleteByQuality(colId);
            console.log('협업 완료 **********', response.data);
            // 협업 완료 후 갱신되는 데이터
            setStatus(response.data.colStatus);
            setColStatus(response.data.colStatus);
            console.log('=======================', colStatus);
        } catch (error) {
            console.error('협업 완료 실패:', error);
        }
    };

    const ColReplyContents = ({ value }) => (
        <Input
            width={'62vw'}
            height={'231px'}
            value={value}
            margin={'0 3vw 0 3vw'}
            padding={'1vh 1vw 1vh 1vw'}
            textColor={'#212121'}
            border={'1px solid #8b8b8b'}
            borderRadius={'12px'}
            overflowY={'auto'}
        />
    );

    console.log(status);
    return (
        <div className={Col_Req_Modal_Container}>
            <div className={Col_Req_Modal} style={{ height }}>
                <div>
                    <div>담당자</div>
                    <div>{colDetail.colManagerFromResponseDto.name}</div>
                    <div>{colDetail.colManagerFromResponseDto.empNo}</div>
                    <div>{colDetail.colManagerFromResponseDto.department}</div>
                </div>
                <div>협업 요청 사유</div>
                <div>{colDetail.colContents}</div>
                <div>
                    <div>고객사 첨부파일</div>
                    <div>
                        <a href={colDetail.vocFilePath}>
                            {colDetail.vocFileName}
                        </a>
                    </div>
                </div>
                {tryAccept ? (
                    // 협업 수락 선택 시
                    <>
                        <div>협업 요청 피드백</div>
                        <div>
                            <TextEditor
                                margin={'0 3vw 0 3vw'}
                                inputHeight={'20vh'}
                                border={'1px solid #8b8b8b'}
                                value={editorValue}
                                onChange={setEditorValue}
                            />
                        </div>
                        <div>담당자 첨부파일</div>
                        <div>{file ? file.name : ''}</div>
                        <ColReqResButton
                            btnName={'닫기'}
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            margin={'0 0 1vh 0'}
                        />
                        <ColReqResButton
                            btnName={'피드백 등록'}
                            onClick={() => {
                                fetchPutCol();
                            }}
                            margin={'0 1vw 1vh 0'}
                        />
                        <Input
                            type="file"
                            display={'none'}
                            ref={fileInputRef}
                            onChange={attachFile}
                        />
                        {file ? (
                            <ColReqResButton
                                btnName={'파일 삭제'}
                                onClick={() => setFile(null)}
                                margin={'0 1vw 1vh 0'}
                            />
                        ) : (
                            <ColReqResButton
                                btnName={'파일 업로드'}
                                onClick={() => {
                                    fileInputRef.current.click();
                                }}
                                margin={'0 1vw 1vh 0'}
                            />
                        )}
                    </>
                ) : // 협업 거절 선택 시
                tryReject ? (
                    <>
                        <div>협업 거절 사유</div>
                        <div>
                            <TextEditor
                                margin={'0 3vw 0 3vw'}
                                inputHeight={'20vh'}
                                border={'1px solid #8b8b8b'}
                                value={editorValue}
                                onChange={setEditorValue}
                            />
                        </div>
                        <div>담당자 첨부파일</div>
                        <div>{file ? file.name : ''}</div>
                        <ColReqResButton
                            btnName={'사유 등록'}
                            onClick={() => {
                                fetchPutCol();
                            }}
                            margin={'0 1vw 1vh 0'}
                        />
                        <Input
                            type="file"
                            display={'none'}
                            ref={fileInputRef}
                            onChange={attachFile}
                        />
                        {file ? (
                            <ColReqResButton
                                btnName={'파일 삭제'}
                                onClick={() => setFile(null)}
                                margin={'0 1vw 1vh 0'}
                            />
                        ) : (
                            <ColReqResButton
                                btnName={'파일 업로드'}
                                onClick={() => {
                                    fileInputRef.current.click();
                                }}
                                margin={'0 1vw 1vh 0'}
                            />
                        )}
                    </>
                ) :
                // 피드백 등록 완료 (수정 불가)
                colStatus === 'REFUSE' || colStatus === 'COMPLETE' ? (
                    <>
                        <div>협업 요청 결과</div>
                        <div>{colReply || '아직 답변이 안 왔네...'}</div>
                        <div>담당자 첨부파일</div>
                        <div>{file ? file.name : ''}</div>
                        <ColReqResButton
                            btnName={'닫기'}
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            margin={'0 0 1vh 0'}
                        />
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

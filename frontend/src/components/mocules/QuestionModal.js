import React, { useEffect, useState, useRef } from 'react';
import dompurify from 'dompurify';
import Label from '../atoms/Label';
import Text from '../atoms/Text';
import Tag from '../atoms/Tag';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import {
    AnswerTitleInput,
    AnswerContent,
    CloseButton,
    AnswerButton,
} from '../atoms/VocButton';
import qmark from '../../assets/css/icons/voc/question_mark.svg';
import amark from '../../assets/css/icons/voc/answer_mark.svg';
import folder from '../../assets/css/icons/voc/question_folder.svg';
import {
    Question_Modal_Container,
    Question_Modal,
    Completed,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import {
    WrongAnswerTitleAlert,
    WrongAnswerContentAlert,
    AnswerCompleteAlert,
} from '../../utils/actions';
import {
    validateAnswerTitle,
    validateAnswerContents,
} from '../../utils/validation';
import { postAnswerByQuestionId } from '../../apis/api/answer';

function QuestionModal({
    questionDetail,
    setAnswerDetail,
    answerDetail,
    questionId,
    setStatus,
    status,
    setOpenModal,
}) {
    const sanitizer = dompurify.sanitize;

    const { userId } = useAuth();
    const thisRole = getCookie('userRole');

    const [isAnswering, setAnswering] = useState(false);
    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);

    const [title, setTitle] = useState('');
    const [editorValue, setEditorValue] = useState('');
    const [file, setFile] = useState('');

    const fileInputRef = useRef(null);

    const fetchPostAnswerByQuestionId = async (questionId) => {
        try {
            const answerData = {
                title: title,
                contents: editorValue,
            };
            const response = await postAnswerByQuestionId(
                file,
                answerData,
                questionId,
            );
            setAnswerDetail(response.data); // 답변 등록으로 갱신된 답변 데이터 저장
            setStatus('COMPLETED'); // 질문 처리 상태 갱신
            AnswerCompleteAlert(); // 답변 완료 알림
            setAnswering(false); // 답변 입력창 제거
        } catch (error) {
            console.log('답변 등록 실패: ', error);
        }
    };

    const filesEllipsis = {
        maxWidth: '96px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const titleChange = (e) => {
        setTitle(e.target.value);
    };

    const attachFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const completedAnswer = () => {
        if (validateAnswerTitle(title)) {
            canShowTitleAlert(true);
            return;
        } else if (validateAnswerContents(editorValue)) {
            canShowContentAlert(true);
            return;
        } else {
            fetchPostAnswerByQuestionId(questionId);
        }
    };

    return (
        <div className={Question_Modal_Container}>
            <div></div>
            <div className={Question_Modal}>
                <div>
                    <Text name={'VoC 문의 번호'} textColor={'#6e6e6e'} />
                    <Text name={'vocNo 계산해야 함'} fontWeight={'600'} />
                </div>
                <div>
                    <Tag
                        category={'Inquiry 주문 문의'}
                        width={'156px'}
                        height={'32px'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        borderRadius={'10px'}
                    />
                </div>
                <div>
                    <div>
                        <img src={qmark} />
                        <div>{questionDetail.title || ''}</div>
                        <img src={folder} />
                        <div>고객사 첨부파일</div>
                        <div style={filesEllipsis}>
                            <a href={questionDetail.filePath} download>
                                {questionDetail.fileName}
                            </a>
                        </div>
                        <div style={filesEllipsis}></div>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(
                                `${questionDetail.contents || ''}`,
                            ),
                        }}
                    />
                </div>

                {!isAnswering && status === 'READY' ? ( // 답변 대기 질문인 경우
                    <div>
                        <AnswerContent />
                    </div>
                ) : isAnswering &&
                  status === 'READY' &&
                  thisRole !== 'CUSTOMER' ? ( // 답변 입력 중
                    <div>
                        <AnswerTitleInput titleChange={titleChange} />
                        <TextEditor
                            placeholder={'답변을 입력하세요.'}
                            width={'852px'}
                            inputHeight={'112px'}
                            inputMaxHeight={'112px'}
                            margin={'12px 0 0 20px'}
                            padding={'0px'}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                    </div>
                ) : status === 'COMPLETED' ? ( // 답변 등록
                    <div className={Completed}>
                        <div>
                            <img src={amark} />
                            <div>{answerDetail.title || ''}</div>
                            <img src={folder} />
                            <div>담당자 첨부파일</div>
                            <div style={filesEllipsis}>
                                <a href={answerDetail.filePath} download>
                                    {answerDetail.fileName}
                                </a>
                            </div>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                    `${answerDetail.contents || ''}`,
                                ),
                            }}
                        />
                    </div>
                ) : (
                    ''
                )}
                <div>
                    <div>
                        {/* 하단 버튼 좌측 첨부파일란 */}
                        {thisRole !== 'CUSTOMER' && status === 'READY' && (
                            <>
                                <img src={folder} />
                                <span>첨부파일</span>
                                <span style={filesEllipsis}>
                                    {file ? file.name : ''}
                                </span>
                            </>
                        )}
                    </div>
                    {/* [닫기] */}
                    <div>
                        <CloseButton
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        />
                    </div>
                    {status === 'READY' && thisRole !== 'CUSTOMER' && (
                        <>
                            {/* [답변하기] */}
                            {!isAnswering && (
                                <div>
                                    <AnswerButton
                                        btnName={'답변하기'}
                                        onClick={() => {
                                            setAnswering(true);
                                        }}
                                    />
                                </div>
                            )}
                            {/* [답변 등록] */}
                            {isAnswering && (
                                <>
                                    <div>
                                        <AnswerButton
                                            btnName={'답변 등록'}
                                            onClick={() => {
                                                completedAnswer();
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="file"
                                            display={'none'}
                                            ref={fileInputRef}
                                            onChange={attachFile}
                                        />
                                        <div>
                                            {file ? (
                                                <AnswerButton
                                                    btnName={'파일 삭제'}
                                                    onClick={() =>
                                                        setFile(null)
                                                    }
                                                />
                                            ) : (
                                                <AnswerButton
                                                    btnName={'파일 업로드'}
                                                    onClick={() =>
                                                        fileInputRef.current.click()
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            <WrongAnswerTitleAlert
                showAlert={showTitleAlert}
                onClose={() => {
                    canShowTitleAlert(false);
                }}
            />
            <WrongAnswerContentAlert
                showAlert={showContentAlert}
                onClose={() => {
                    canShowContentAlert(false);
                }}
            />
        </div>
    );
}

export default QuestionModal;

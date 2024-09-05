import React, { useState, useRef } from 'react';
import dompurify from 'dompurify';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import { AnswerButton } from '../atoms/VocButton';
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
import { Answer_Input, Ready, Completed } from '../../assets/css/Voc.css';

export default function AnswerInput({
    questionId,
    questionDetail,
    answerDetail,
    setAnswerDetail,
}) {
    const sanitizer = dompurify.sanitize;

    const role = getCookie('userRole');

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
            AnswerCompleteAlert(); // 답변 완료 알림
            setTimeout(() => {
                window.location.reload();
            }, '1000');
        } catch (error) {
            console.log('답변 등록 실패: ', error);
        }
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

    const calDateNo = (datetime) => {
        if (datetime) {
            const [datePart, timePart] = datetime.split('T');
            return `${datePart}${' '}${timePart.substring(0, 5)}`;
        }
    };

    return (
        <div className={Answer_Input}>
            <div>
                {!isAnswering && questionDetail.status === 'READY' ? ( // 답변 대기 질문인 경우
                    ''
                ) : isAnswering &&
                  questionDetail.status === 'READY' &&
                  role !== 'customer' ? ( // 답변 입력 중
                    <div className={Ready}>
                        {/* 제목 + 첨부파일 그룹 */}
                        <div>
                            {/* 답변 제목 */}
                            <Input
                                value={title}
                                onChange={titleChange}
                                width={'988px'}
                                height={'36px'}
                                margin={'0 auto 0 auto'}
                                padding={'0px 12px 0px 12px'}
                                border={'1px solid #c1c1c1'}
                                placeholder={'제목을 입력하세요. (30자)'}
                            />
                            {/* 파일 업로드 버튼 */}
                            <div>
                                <Input
                                    type="file"
                                    display={'none'}
                                    ref={fileInputRef}
                                    onChange={attachFile}
                                />
                                {file ? (
                                    <AnswerButton
                                        btnName={'파일 삭제'}
                                        backgroundColor={'#ffffff'}
                                        textColor={'#1748ac'}
                                        onClick={() => setFile(null)}
                                    />
                                ) : (
                                    <AnswerButton
                                        btnName={'파일 업로드'}
                                        backgroundColor={'#ffffff'}
                                        textColor={'#1748ac'}
                                        onClick={() =>
                                            fileInputRef.current.click()
                                        }
                                    />
                                )}
                            </div>
                            <div>
                                {file
                                    ? `첨부파일: ${file.name}`
                                    : '파일을 첨부할 수 있습니다.'}
                            </div>
                        </div>
                        {/* 답변 입력 */}
                        <TextEditor
                            placeholder={'답변을 입력하세요.'}
                            width={'1320px'}
                            inputHeight={'240px'}
                            inputMaxHeight={'240px'}
                            padding={'0px'}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                    </div>
                ) : questionDetail.status === 'COMPLETED' ? ( // 답변 등록 완료
                    <div className={Completed}>
                        <div>
                            <div>
                                <div>답변 완료</div>
                                <div>{answerDetail.title || ''}</div>
                                <div>
                                    <a href={answerDetail.filePath} download>
                                        {answerDetail.fileName}
                                    </a>
                                </div>
                            </div>
                            <div>{calDateNo(answerDetail.createdDate)}</div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: sanitizer(
                                        `${answerDetail.contents || ''}`,
                                    ),
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div className={Completed}>
                    {questionDetail.status === 'READY' &&
                        role !== 'customer' && (
                            <>
                                {/* [답변하기] */}
                                {!isAnswering && (
                                    <AnswerButton
                                        btnName={'답변하기'}
                                        backgroundColor={'#1748ac'}
                                        textColor={'#ffffff'}
                                        onClick={() => {
                                            setAnswering(true);
                                        }}
                                    />
                                )}
                                {/* 협업 요청] */}
                                {!isAnswering && role === 'sales' && (
                                    <AnswerButton
                                        btnName={'협업 요청'}
                                        backgroundColor={'#1748ac'}
                                        textColor={'#ffffff'}
                                        onClick={() => {
                                            window.open(
                                                `/voc-form/collaboration?questionId=${questionId}`,
                                                '_blank',
                                            );
                                        }}
                                    />
                                )}
                                {/* [답변 등록] */}
                                {isAnswering && (
                                    <>
                                        <AnswerButton
                                            btnName={'작성 취소'}
                                            backgroundColor={'#1748ac'}
                                            textColor={'#ffffff'}
                                            onClick={() => {
                                                setAnswering(false);
                                            }}
                                        />
                                        <AnswerButton
                                            btnName={'답변 등록'}
                                            backgroundColor={'#1748ac'}
                                            textColor={'#ffffff'}
                                            onClick={() => {
                                                completedAnswer();
                                            }}
                                        />
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

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dompurify from 'dompurify';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import { QuestionAnswerButton } from '../atoms/VocButton';
import { getCookie } from '../../apis/utils/cookies';
import {
    WrongAnswerTitleAlert,
    WrongAnswerContentAlert,
    AnswerCompleteAlert,
    AnswerEditCompleteAlert,
} from '../../utils/actions';
import {
    validateAnswerTitle,
    validateAnswerContents,
} from '../../utils/validation';
import {
    deleteQuestionByUserId,
    deleteQuestionByUserIdForManager,
} from '../../apis/api/question';
import {
    postAnswerByQuestionId,
    putAnswerByQuestionId,
} from '../../apis/api/answer';
import { Answer_Input, Ready, Completed } from '../../assets/css/Voc.css';

export default function AnswerInput({
    questionId,
    questionDetail,
    answerDetail,
    setAnswerDetail,
}) {
    const navigate = useNavigate();
    const sanitizer = dompurify.sanitize;

    const role = getCookie('userRole');
    const userId = getCookie('userId');

    const [writeAnswer, setWriteAnswer] = useState(false);
    const [editAnswer, setEditAnswer] = useState(false);
    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);
    const [showSuccessAlert, canShowSuccessAlert] = useState(false);
    const [showSuccessEditAlert, canShowSuccessEditAlert] = useState(false);

    const [title, setTitle] = useState(answerDetail?.title || '');
    const [editorValue, setEditorValue] = useState(
        answerDetail?.contents || '',
    );
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState(answerDetail?.fileName || '');
    const [filePath, setFilePath] = useState(answerDetail?.filePath || '');

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
            setAnswerDetail(response.data);
            canShowSuccessAlert(true);
            setTimeout(() => {
                window.location.reload();
            }, '2000');
        } catch (error) {
            console.log('답변 등록 실패: ', error);
        }
    };

    const fetchPutAnswerByQuestionId = async (questionId) => {
        try {
            const answerData = {
                title: title,
                contents: editorValue,
            };
            const response = await putAnswerByQuestionId(
                file,
                answerData,
                questionId,
            );
            setAnswerDetail(response.data);
            canShowSuccessEditAlert(true);
            setTimeout(() => {
                window.location.reload();
            }, '2000');
        } catch (error) {
            console.error('답변 수정 실패: ', error);
        }
    };

    const fetchDeleteQuestionByQuestionId = async (userId, questionId) => {
        try {
            await deleteQuestionByUserId(userId, questionId);
            navigate('/voc-list/question');
        } catch (error) {
            console.log('질문 삭제(고객사용) 실패: ', error);
        }
    };

    const fetchDeleteQuestionByQuestionIdForManager = async (questionId) => {
        try {
            await deleteQuestionByUserIdForManager(questionId);
            navigate('/voc-list/question');
        } catch (error) {
            console.log('질문 삭제(담당자용) 실패: ', error);
        }
    };

    const titleChange = (e) => {
        const inputTitle = e.target.value;

        if (inputTitle.length <= 30) {
            setTitle(inputTitle);
        }
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
            if (answerDetail != []) {
                fetchPutAnswerByQuestionId(questionId);
            } else {
                fetchPostAnswerByQuestionId(questionId);
            }
        }
    };

    const calDateNo = (datetime) => {
        if (datetime) {
            const [datePart, timePart] = datetime.split('T');
            return `${datePart}${' '}${timePart.substring(0, 5)}`;
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, [writeAnswer, editAnswer]);

    return (
        <div className={Answer_Input}>
            <div>
                {!writeAnswer && questionDetail.status === 'READY' ? ( // 답변 대기 질문인 경우
                    ''
                ) : (writeAnswer || editAnswer) && role !== 'customer' ? ( // 답변 입력 중
                    <div className={Ready}>
                        {/* 제목 + 첨부파일 그룹 */}
                        <div>
                            {/* 답변 제목 */}
                            <Input
                                value={title}
                                onChange={titleChange}
                                width={'924px'}
                                height={'36px'}
                                margin={'0 auto 0 auto'}
                                padding={'0px 12px 0px 12px'}
                                border={'1px solid #8b8b8b'}
                                placeholder={'제목을 입력하세요. (30자)'}
                            />
                            {/* 답변 제목 길이 */}
                            <div>{title.length}</div>
                            <div>/30</div>
                            {/* 파일 업로드 버튼 */}
                            <div>
                                <Input
                                    type="file"
                                    display={'none'}
                                    ref={fileInputRef}
                                    onChange={attachFile}
                                />
                                {file ? (
                                    <QuestionAnswerButton
                                        btnName={'파일 삭제'}
                                        backgroundColor={'#ffffff'}
                                        textColor={'#1748ac'}
                                        onClick={() => {
                                            setFile(null);
                                            setFileName(null);
                                        }}
                                    />
                                ) : (
                                    <QuestionAnswerButton
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
                                {fileName ? (
                                    <>
                                        <a href={filePath}>{fileName}</a>
                                    </>
                                ) : file ? (
                                    file.name
                                ) : (
                                    '파일을 첨부할 수 있습니다.'
                                )}
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
                            border={'1px solid #8b8b8b'}
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
                    {(questionDetail.status === 'READY' || editAnswer) &&
                    role !== 'customer' ? (
                        <>
                            {!writeAnswer && (
                                <>
                                    <QuestionAnswerButton
                                        btnName={'질문 삭제'}
                                        backgroundColor={'#1748ac'}
                                        textColor={'#ffffff'}
                                        onClick={() => {
                                            window.confirm(
                                                '고객사의 질문이 삭제됩니다. 정말 삭제하시겠습니까?',
                                            )
                                                ? fetchDeleteQuestionByQuestionIdForManager(
                                                      questionId,
                                                  )
                                                : '';
                                        }}
                                    />
                                    <QuestionAnswerButton
                                        btnName={'답변하기'}
                                        backgroundColor={'#1748ac'}
                                        textColor={'#ffffff'}
                                        onClick={() => {
                                            setWriteAnswer(true);
                                        }}
                                    />
                                </>
                            )}
                            {!writeAnswer && role === 'sales' && (
                                <QuestionAnswerButton
                                    btnName={'협업 요청'}
                                    backgroundColor={'#1748ac'}
                                    textColor={'#ffffff'}
                                    onClick={() => {
                                        // window.open(
                                        //     `/voc-form/collaboration?questionId=${questionId}`,
                                        //     '_blank',
                                        // );
                                        navigate('/voc-form/collaboration', {
                                            state: {
                                                questionDetail: questionDetail,
                                            },
                                        });
                                    }}
                                />
                            )}
                            {writeAnswer && (
                                <>
                                    <QuestionAnswerButton
                                        btnName={'작성 취소'}
                                        backgroundColor={'#1748ac'}
                                        textColor={'#ffffff'}
                                        onClick={() => {
                                            window.confirm(
                                                '지금까지 작성한 내용이 사라집니다. 정말 취소하시겠습니까?',
                                            )
                                                ? setWriteAnswer(false)
                                                : '';
                                        }}
                                    />
                                    <QuestionAnswerButton
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
                    ) : questionDetail.status === 'READY' &&
                      role === 'customer' ? (
                        <>
                            <QuestionAnswerButton
                                btnName={'질문 삭제'}
                                backgroundColor={'#1748ac'}
                                textColor={'#ffffff'}
                                onClick={() => {
                                    window.confirm(
                                        '작성하신 질문이 삭제됩니다. 정말 삭제하시겠습니까?',
                                    )
                                        ? fetchDeleteQuestionByQuestionId(
                                              userId,
                                              questionId,
                                          )
                                        : '';
                                }}
                            />
                            <QuestionAnswerButton
                                btnName={'질문 수정'}
                                backgroundColor={'#1748ac'}
                                textColor={'#ffffff'}
                                onClick={() => {
                                    navigate('/voc-form/question', {
                                        state: {
                                            questionDetail: questionDetail,
                                        },
                                    });
                                }}
                            />
                        </>
                    ) : !editAnswer && userId === answerDetail?.managerId ? (
                        <QuestionAnswerButton
                            btnName={'답변 수정'}
                            backgroundColor={'#1748ac'}
                            textColor={'#ffffff'}
                            margin={'12px 0 24px 24px'}
                            onClick={() => {
                                setEditAnswer(true);
                                setWriteAnswer(true);
                            }}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <WrongAnswerTitleAlert
                showAlert={showTitleAlert}
                onClose={() => {
                    canShowTitleAlert(false);
                }}
                inert
            />
            <WrongAnswerContentAlert
                showAlert={showContentAlert}
                onClose={() => {
                    canShowContentAlert(false);
                }}
                inert
            />
            <AnswerCompleteAlert
                showAlert={showSuccessAlert}
                onClose={() => {
                    canShowSuccessAlert(false);
                }}
                inert
            />
            <AnswerEditCompleteAlert
                showAlert={showSuccessEditAlert}
                onClose={() => {
                    canShowSuccessEditAlert(false);
                }}
                inert
            />
        </div>
    );
}

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import { VocButton } from '../atoms/VocButton';
import { useAuth } from '../../hooks/useAuth';
import {
    WrongQuestionTitleAlert,
    WrongQuestionContentAlert,
    InquiryIdisNullAlert,
    QuestionCompleteAlert,
    QuestionEditCompleteAlert,
} from '../../utils/actions';
import {
    validateQuestionTitle,
    validateQuestionContents,
} from '../../utils/validation';
import {
    postQuestionByUserIdAboutInquiry,
    postQuestionByUserId,
    putQuestionByUserIdAboutInquiry,
    putQuestionByUserId,
} from '../../apis/api/question';
import { Question_Input } from '../../assets/css/Voc.css';

function QuestionInput({
    selectedType,
    inquiryId,
    questionDetail: initialQuestionDetail,
}) {
    const { userId } = useAuth();
    const navigate = useNavigate();

    const questionDetail =
        initialQuestionDetail ||
        JSON.parse(localStorage.getItem(`questionDetail-${questionId}`));

    const [editorValue, setEditorValue] = useState(
        questionDetail?.contents || '',
    );

    const [title, setTitle] = useState(questionDetail?.title || '');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState(questionDetail?.fileName || '');
    const [filePath, setFilePath] = useState(questionDetail?.filePath || '');

    const fileInputRef = useRef(null);

    const status = 'READY';

    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);
    const [showInquiryIdAlert, canShowInquiryIdAlert] = useState(false);
    const [showSuccessAlert, canShowSuccessAlert] = useState(false);
    const [showSuccessEditAlert, canShowSuccessEditAlert] = useState(false);

    // 질문 등록
    const fetchPostQuestionByUserId = async () => {
        try {
            const questionData = {
                title,
                contents: editorValue,
                type: selectedType,
                status,
            };
            if (selectedType === 'INQ') {
                if (!inquiryId) {
                    canShowInquiryIdAlert(true);
                    return;
                }
                // 문의 관련 질문인 경우
                const response = await postQuestionByUserIdAboutInquiry(
                    file,
                    questionData,
                    userId,
                    inquiryId,
                );
                localStorage.removeItem(
                    `questionDetail-${questionDetail?.questionId}`,
                );
                localStorage.setItem(
                    `questionDetail-${questionDetail?.questionId}`,
                    JSON.stringify(response.data),
                );
                canShowSuccessAlert(true);
                setTimeout(() => {
                    navigate('/voc-list/question');
                }, '2000');
            } else {
                // 문의와 무관한 질문인 경우
                const response = await postQuestionByUserId(
                    file,
                    questionData,
                    userId,
                );
                localStorage.removeItem(
                    `questionDetail-${questionDetail?.questionId}`,
                );
                localStorage.setItem(
                    `questionDetail-${questionDetail?.questionId}`,
                    JSON.stringify(response.data),
                );
                canShowSuccessAlert(true);
                setTimeout(() => {
                    navigate('/voc-list/question');
                }, '2000');
            }
        } catch (error) {
            console.error('질문 등록 실패: ', error);
        }
    };

    // 질문 수정
    const fetchPutQuestionByUserId = async () => {
        try {
            const questionData = {
                title,
                contents: editorValue,
                type: selectedType,
                status,
            };
            if (selectedType === 'INQ') {
                if (!inquiryId) {
                    canShowInquiryIdAlert(true);
                    return;
                }
                // 문의 관련 질문인 경우
                const response = await putQuestionByUserIdAboutInquiry(
                    file,
                    questionData,
                    userId,
                    inquiryId,
                    questionDetail?.questionId,
                );
                localStorage.removeItem(
                    `questionDetail-${questionDetail?.questionId}`,
                );
                localStorage.setItem(
                    `questionDetail-${questionDetail?.questionId}`,
                    JSON.stringify(response.data),
                );
                canShowSuccessEditAlert(true);
                setTimeout(() => {
                    navigate('/voc-form/answer', {
                        state: {
                            questionId: questionDetail?.questionId,
                        },
                    });
                }, '1000');
            } else {
                // 문의와 무관한 질문인 경우
                const response = await putQuestionByUserId(
                    file,
                    questionData,
                    userId,
                    questionDetail?.questionId,
                );
                localStorage.removeItem(
                    `questionDetail-${questionDetail?.questionId}`,
                );
                localStorage.setItem(
                    `questionDetail-${questionDetail?.questionId}`,
                    JSON.stringify(response.data),
                );
                canShowSuccessEditAlert(true);
                setTimeout(() => {
                    navigate('/voc-form/answer', {
                        state: {
                            questionId: questionDetail?.questionId,
                        },
                    });
                }, '1000');
            }
        } catch (error) {
            console.error('질문 수정 실패: ', error);
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

    const completedQuestion = () => {
        if (validateQuestionTitle(title)) {
            canShowTitleAlert(true);
            return;
        } else if (validateQuestionContents(editorValue)) {
            canShowContentAlert(true);
            return;
        } else {
            if (questionDetail) {
                fetchPutQuestionByUserId();
            } else {
                fetchPostQuestionByUserId();
            }
        }
    };

    return (
        <>
            <div className={Question_Input}>
                {/* 제목 + 첨부파일 그룹 */}
                <div>
                    {/* 질문 제목 */}
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
                    {/* 질문 제목 길이 */}
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
                        {file || fileName ? (
                            <VocButton
                                btnName={'파일 삭제'}
                                backgroundColor={'#ffffff'}
                                textColor={'#03507d'}
                                onClick={() => {
                                    setFile(null);
                                    setFileName(null);
                                }}
                            />
                        ) : (
                            <VocButton
                                btnName={'파일 업로드'}
                                backgroundColor={'#ffffff'}
                                textColor={'#03507d'}
                                onClick={() => fileInputRef.current.click()}
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
                {/* 질문 입력 */}
                <TextEditor
                    placeholder={'질문을 입력하세요.'}
                    width={'1320px'}
                    inputHeight={'240px'}
                    inputMaxHeight={'240px'}
                    padding={'0px'}
                    value={editorValue}
                    border={'1px solid #8b8b8b'}
                    onChange={setEditorValue}
                />
                <div>
                    <VocButton
                        btnName={'질문 등록'}
                        backgroundColor={'#03507d'}
                        textColor={'#ffffff'}
                        onClick={() => {
                            completedQuestion();
                        }}
                    />
                </div>
            </div>
            <WrongQuestionTitleAlert
                showAlert={showTitleAlert}
                onClose={() => {
                    canShowTitleAlert(false);
                }}
                inert
            />
            <WrongQuestionContentAlert
                showAlert={showContentAlert}
                onClose={() => {
                    canShowContentAlert(false);
                }}
                inert
            />
            <InquiryIdisNullAlert
                showAlert={showInquiryIdAlert}
                onClose={() => {
                    canShowInquiryIdAlert(false);
                }}
                inert
            />
            <QuestionCompleteAlert
                showAlert={showSuccessAlert}
                onClose={() => {
                    canShowSuccessAlert(false);
                }}
                inert
            />
            <QuestionEditCompleteAlert
                showAlert={showSuccessEditAlert}
                onClose={() => {
                    canShowSuccessEditAlert(false);
                }}
                inert
            />
        </>
    );
}

export default QuestionInput;

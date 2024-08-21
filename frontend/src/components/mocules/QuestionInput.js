import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import TextEditor from '../atoms/TextEditor';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue } from 'recoil';
import { getUserEmail } from './../../index';
import {
    WrongQuestionTitleAlert,
    WrongQuestionContentAlert,
    QuestionCompleteAlert,
} from '../../utils/actions';
import {
    validateQuestionTitle,
    validateQuestionContents,
} from '../../utils/validation';
import { getCustomerInfo, getManagerInfo } from '../../apis/api/auth';
import { postQuestionByUserId, uploadFile } from '../../apis/api/question';
import { Question_Input } from '../../assets/css/Voc.css';

function QuestionInput() {
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [editorValue, setEditorValue] = useState('');
    const [userName, setUserName] = useState('');
    const userEmail = useRecoilValue(getUserEmail);

    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [type, setType] = useState('SITE');
    const [status, setStatus] = useState('READY');

    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);

    const titleRef = useRef(null);
    const fileInputRef = useRef(null);

    // 전역 변수로 수정 필요
    const findUserName = async () => {
        try {
            const customer = await getCustomerInfo();
            setUserName(customer);

            if (customer === 'Name not found') {
                const manager = await getManagerInfo();
                setUserName(manager);
            }
            return userName;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        findUserName();
    }, []);

    // Inquiry 관련 질문 등록 API 추가 필요

    // Inquiry 무관 질문 등록 API
    const fetchPostQuestionByUserId = async () => {
        try {
            const questionData = {
                title,
                contents: editorValue,
                type,
                status,
            };
            const result = await postQuestionByUserId(
                file,
                questionData,
                userId,
                getCookie('accessToken'),
            );

            if (result) {
                console.log('응답받은 데이터는 다음과 같습니다.', result);
                setAnswerDetail(result);
            } else {
                console.error('Fetched data is not an array or is invalid.');
                setAnswerDetail([]);
            }
            resetForm();
        } catch (error) {
            console.error('Error in posting question:', error);
        }
    };

    const attachFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const resetForm = () => {
        setTitle('');
        setEditorValue('');
        if (titleRef.current) {
            titleRef.current.value = '';
        }
        setFile(null);
    };

    const completedQuestion = () => {
        if (validateQuestionTitle(title)) {
            canShowTitleAlert(true);
            return;
        } else if (validateQuestionContents(editorValue)) {
            canShowContentAlert(true);
            return;
        } else {
            fetchPostQuestionByUserId();
            setTimeout(() => {
                navigate('/voc-list');
            }, '2000');
            QuestionCompleteAlert();
        }
    };

    return (
        <>
            <div className={Question_Input}>
                <div>
                    <div>
                        <div>성명</div>
                        <div>{userName}</div>
                        <div>이메일</div>
                        <div>{userEmail}</div>
                    </div>
                    <div>
                        <Input
                            type="text"
                            width={'1126px'}
                            height={'32px'}
                            padding={'0 8px 0 8px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'8px'}
                            ref={titleRef}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextEditor
                            placeholder={'답변을 입력하세요.'}
                            width={'1144px'}
                            inputHeight={'144px'}
                            inputMaxHeight={'144px'}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                    </div>
                    <div>
                        <div>첨부파일</div>
                        <div>
                            <Input
                                type="file"
                                display={'none'}
                                ref={fileInputRef}
                                onChange={attachFile}
                            />
                            <Button
                                btnName={'파일 추가'}
                                width={'72px'}
                                height={'28px'}
                                fontSize={'12px'}
                                backgroundColor={'#ffffff'}
                                textColor={'#8b8b8b'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'4px'}
                                onClick={() => fileInputRef.current.click()}
                            />
                        </div>
                        <div>
                            <Button
                                btnName={'파일 삭제'}
                                width={'72px'}
                                height={'28px'}
                                fontSize={'12px'}
                                backgroundColor={'#ffffff'}
                                textColor={'#8b8b8b'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'4px'}
                                onClick={() => setFile(null)}
                            />
                        </div>
                        <div>
                            * 파일은 최대 1개까지 첨부 가능하며, 최대 용량은 총
                            10MB의 용량 제한이 있습니다.
                        </div>
                    </div>
                    <div>
                        <div>{file ? file.name : '파일 첨부'}</div>
                    </div>
                    <div>
                        <Button
                            btnName={'문의 등록'}
                            width={'108px'}
                            height={'48px'}
                            fontSize={'18px'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            border={'none'}
                            borderRadius={'12px'}
                            onClick={() => {
                                completedQuestion();
                            }}
                        />
                    </div>
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
        </>
    );
}

export default QuestionInput;

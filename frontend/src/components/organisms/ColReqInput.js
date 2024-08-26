import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import TextEditor from '../atoms/TextEditor';
import { postCollaborationBySales } from '../../apis/api/collaboration';
import { useAuth } from '../../hooks/useAuth';
import { Col_Req_Input } from '../../assets/css/Voc.css';

export default function ColReqInput({ colResId }) {
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [colManager, setColManager] = useState('');
    const [editorValue, setEditorValue] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const questionId = queryParams.get('questionId');

    const status = 'READY';

    // 질문 등록
    const fetchPostColReq = async () => {
        try {
            const colData = {
                colReqId: userId,
                colResId,
                colContents: editorValue,
            };
            const response = await postCollaborationBySales(
                null,
                colData,
                questionId,
            );
            console.log(response.data);
            setTimeout(() => {
                navigate('/voc-list/question');
            }, '2000');
            resetForm();
        } catch (error) {
            console.error('협업 요청 실패: ', error);
        }
    };

    const resetForm = () => {
        setEditorValue('');
    };

    return (
        <>
            <div className={Col_Req_Input}>
                <div>
                    <div>
                        <TextEditor
                            placeholder={'협업 요청 사유를 입력하세요.'}
                            width={'1144px'}
                            inputHeight={'336px'}
                            inputMaxHeight={'336px'}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'협업 요청'}
                            width={'108px'}
                            height={'48px'}
                            fontSize={'18px'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            border={'none'}
                            borderRadius={'12px'}
                            onClick={() => {
                                fetchPostColReq();
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* <WrongQuestionTitleAlert
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
                showAlert={showFailedAlert}
                onClose={() => {
                    canShowFailedAlert(false);
                }}
                inert
            /> */}
        </>
    );
}

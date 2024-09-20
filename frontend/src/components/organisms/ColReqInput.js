import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { QuestionAnswerButton } from '../atoms/VocButton';
import TextEditor from '../atoms/TextEditor';
import { postCollaborationBySales } from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';
import { Col_Req_Input } from '../../assets/css/Voc.css';

export default function ColReqInput({ colResId, questionDetail }) {
    const navigate = useNavigate();

    const [editorValue, setEditorValue] = useState('');
    const [openBackDrop, setOpenBackDrop] = useState(false);

    // 질문 등록
    const fetchPostColReq = async () => {
        try {
            const colData = {
                colReqId: getCookie('userId'),
                colResId,
                colContents: editorValue,
            };
            const response = await postCollaborationBySales(
                null,
                colData,
                questionDetail?.questionId,
            );
            console.log(response.data);
            setOpenBackDrop(true);
            setTimeout(() => {
                setOpenBackDrop(false);
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
        <div>
            <div className={Col_Req_Input}>
                <TextEditor
                    placeholder={'협업 요청 사유를 입력하세요.'}
                    width={'1320px'}
                    inputHeight={'240px'}
                    inputMaxHeight={'240px'}
                    padding={'0px'}
                    margin={'0 auto 0 auto'}
                    value={editorValue}
                    border={'1px solid #8b8b8b'}
                    onChange={setEditorValue}
                />
                <div>
                    <>
                        <QuestionAnswerButton
                            btnName={'요청 등록'}
                            backgroundColor={'#1748ac'}
                            textColor={'#ffffff'}
                            margin={'0 24px 0 0'}
                            onClick={() => {
                                fetchPostColReq();
                            }}
                        />
                        <QuestionAnswerButton
                            btnName={'요청 취소'}
                            backgroundColor={'#ffffff'}
                            border={'1px solid #1748ac'}
                            textColor={'#1748ac'}
                            onClick={() => {
                                window.confirm(
                                    '지금까지 작성한 내용이 사라집니다. 정말 취소하시겠습니까?',
                                )
                                    ? navigate(-1)
                                    : '';
                            }}
                        />
                    </>
                </div>
            </div>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openBackDrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

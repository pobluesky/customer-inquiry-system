import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../../components/atoms/Label';
import Tag from '../atoms/Tag';
import Input from '../atoms/Input';
import TextEditor from './../mocules/TextEditor';
import Button from '../atoms/Button';
import qmark from '../../assets/css/icons/voc/question_mark.svg';
import amark from '../../assets/css/icons/voc/answer_mark.svg';
import folder from '../../assets/css/icons/voc/question_folder.svg';
import { Modal_Container, Modal_Outside, _Tag, Modal_Part_Question, Modal_Part_Answer, _Button, Answering } from '../../assets/css/Voc.css';

const BeforeAnswer = styled.div`
    width: 840px;
    height: 228px;
    margin: 24px auto 0 auto;
    font-size: 24px;
    font-weight: 600;
    color: #6e6e6e;
    text-align: center;
    line-height: 228px;
    border: solid 1px #c1c1c1;
    border-radius: 12px;
    background-color: ${(props) => {
        if (props.$status === 'ready') return '#d2f1ff';
        if (props.$status === 'completed') return '#ffffff';
    }};
`;

function QuestionModal({ title, contents, files, status, onClose }) {
    const [getStatus, setStatus] = useState(status);
    const [isAnswering, setAnswering] = useState(false);
    const [originalText, setOriginalText] = useState('');
    const [answerTitle, setAnswerTitle] = useState('');
    const [answerContents, setAnswerContents] = useState('');

    const BeforeAnswerContainer = ({ status }) => {
        return <BeforeAnswer $status={status}>{status === 'ready' && '답변 대기 중입니다.'}</BeforeAnswer>;
    };

    const answerTitleChange = (e) => {
        setAnswerTitle(e.target.value);
    };

    return (
        <div className={Modal_Outside}>
            <Label label={'문의 내용'} width={'96px'} height={'28px'} backgroundColor={'#007aff'} textColor={'#ffffff'} borderRadius={'12px 12px 0 0'} />
            <div className={Modal_Container}>
                <div className={_Tag}>
                    <Tag category={'Inquiry 주문 문의'} width={'156px'} height={'32px'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                </div>
                <div className={Modal_Part_Question}>
                    <div>
                        <img src={qmark} />
                        <p>{title}</p>
                        <img src={folder} />
                        <div>고객사 첨부파일</div>
                        <div>{files}</div>
                    </div>
                    <div>{contents}</div>
                </div>

                {!isAnswering && getStatus === 'ready' ? ( // 답변 입력 전
                    <BeforeAnswerContainer status={getStatus} />
                ) : isAnswering && getStatus === 'ready' ? ( // 답변 입력 중
                    <div className={Answering}>
                        <Input value={answerTitle} onChange={answerTitleChange} width={'840px'} height={'36px'} margin={'8px 0 8px 0'} padding={'0px'} borderRadius={'12px'} />
                        <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                    </div>
                ) : !isAnswering && getStatus === 'completed' ? ( // 답변 등록
                    <div className={Modal_Part_Answer}>
                        <div>
                            <img src={amark} />
                            <p>{answerTitle}</p>
                            <img src={folder} />
                            <div>담당자 첨부파일</div>
                            <div>파일명</div>
                        </div>
                        <div>{answerContents}</div>
                    </div>
                ) : (
                    ''
                )}
                <div className={_Button}>
                    {/* [닫기] */}
                    <Button
                        btnName={'닫기'}
                        onClick={onClose}
                        width={'96px'}
                        height={'32px'}
                        margin={'0 0 24px 0'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        border={`none`}
                        borderRadius={'10px'}
                        float={'right'}
                    />
                    {/* [답변하기] */}
                    {getStatus === 'ready' && !isAnswering && (
                        <Button
                            btnName={'답변하기'}
                            onClick={() => {
                                setAnswering(true);
                            }}
                            width={'96px'}
                            height={'32px'}
                            margin={'0 24px 24px 0'}
                            backgroundColor={'#2f4f79'}
                            textColor={'#ffffff'}
                            border={`none`}
                            borderRadius={'10px'}
                            float={'right'}
                        />
                    )}
                    {/* [답변 등록] */}
                    {getStatus === 'ready' && isAnswering && (
                        <Button
                            btnName={'답변 등록'}
                            onClick={() => {
                                console.log('버튼 클릭');
                                answerTitle.length > 21 || answerTitle.length < 1 ? alert('제목은 1~20자까지 입력 가능합니다.') : originalText.length < 10 ? alert('10자 이상 답변을 입력하세요.') : (setStatus('completed'), setAnswerContents(originalText), setAnswering(false));
                            }}
                            width={'96px'}
                            height={'32px'}
                            margin={'0 24px 24px 0'}
                            backgroundColor={'#2f4f79'}
                            textColor={'#ffffff'}
                            border={`none`}
                            borderRadius={'10px'}
                            float={'right'}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuestionModal;

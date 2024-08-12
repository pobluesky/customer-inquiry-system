import React from 'react';
import Button from '../atoms/Button';
import { Question_Card } from '../../assets/css/Voc.css';

function QuestionCard({
    onClick,
    status,
    customerName,
    questionCreatedDate,
    answerCreatedDate,
    title,
}) {
    const btnName = status === 'completed' ? '답변 완료' : '답변 대기';
    const backgroundColor = status === 'completed' ? '#f02323' : '#007aff';

    return (
        <div className={Question_Card} onClick={onClick}>
            <div>
                <div>
                    <Button
                        btnName={btnName}
                        width={'132px'}
                        height={'40px'}
                        backgroundColor={backgroundColor}
                        textColor={'#ffffff'}
                        fontSize={'20px'}
                        border={'none'}
                        borderRadius={'16px'}
                    />
                </div>
                <div>
                    {/* 4자 이상 고객사명 ellipsis */}
                    <div>{customerName}</div>
                    <div>
                        <div>문의 등록일&nbsp;&nbsp;{questionCreatedDate}</div>
                        <div>답변 등록일&nbsp;&nbsp;{answerCreatedDate}</div>
                    </div>
                </div>
                <div>{title}</div>
                <div>
                    <div>
                        <Button
                            btnName={'협업 요청'}
                            width={'72px'}
                            height={'24px'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            fontSize={'12px'}
                            border={'none'}
                            borderRadius={'8px'}
                        />
                    </div>
                    <div>답변 달기</div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;

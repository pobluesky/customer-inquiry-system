import React, { useState } from 'react';
import Button from '../atoms/Button';
import { Question_Card } from '../../assets/css/Voc.css';

function QuestionCard({
    onClick,
    status,
    customerName = '룰루랄라손흥민주식회사',
    questionCreatedDate,
    answerCreatedDate,
    title = '정말 간절하게 화장실 가고 싶습니다.',
}) {
    const btnName = status === 'COMPLETED' ? '답변 완료' : '답변 대기';
    const backgroundColor = status === 'COMPLETED' ? '#f02323' : '#007aff';

    const [isHovered, setIsHovered] = useState(false);

    // 긴 고객사명은 Ellipsis 처리 (176px)
    const customerNameEllipsis = {
        maxWidth: '152px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    // 긴 질문 제목은 Ellipsis 처리 (280px)
    const titleEllipsis = {
        maxWidth: '320px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const cardStyle = {
        backgroundColor: isHovered ? '#cbefff' : '#ffffff',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className={Question_Card} style={cardStyle} onClick={onClick}>
            <div>
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
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>
                    <div>문의 번호</div>
                </div>
                <div>
                    <div style={customerNameEllipsis}>{customerName}</div>
                    <div>
                        <div>문의 등록일&nbsp;&nbsp;{questionCreatedDate}</div>
                        <div>답변 등록일&nbsp;&nbsp;{answerCreatedDate}</div>
                    </div>
                </div>
                <div style={titleEllipsis}>{title}</div>
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
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        답변 달기
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;

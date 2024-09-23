import React, { useState, useEffect } from 'react';
import dompurify from 'dompurify';
import { Question_Viewer } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

// 질문 뷰어
export default function QuestionViewer({
    questionDetail: initialQuestionDetail,
    questionId,
}) {
    const sanitizer = dompurify.sanitize;
    const role = getCookie('userRole');
    const inqRole = role.toLowerCase();

    const questionDetail =
        initialQuestionDetail ||
        JSON.parse(localStorage.getItem(`questionDetail-${questionId}`));

    // Voc번호를 생성하는 인코딩 함수: questionId + hour + minute + second
    const calDateNo = (datetime) => {
        if (datetime) {
            const [datePart, timePart] = datetime.split('T');
            return `${datePart}${' '}${timePart.substring(0, 5)}`;
        }
    };

    const filesEllipsis = {
        maxWidth: '144px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'INQ':
                return 'Inquiry 문의';
            case 'SITE':
                return '사이트 문의';
            case 'ETC':
                return '기타 문의';
        }
    };

    return (
        <div className={Question_Viewer}>
            {/* 문의 유형, 제목, 첨부파일 */}
            <div>
                <div
                    onClick={() => {
                        questionDetail?.type === 'INQ' &&
                            window.open(
                                `/inq-list/${inqRole}/${questionDetail?.inquiryId}`,
                                '_blank',
                            );
                    }}
                >
                    {getTypeLabel(questionDetail?.type)}
                </div>
                <div>{questionDetail?.title || ''}</div>
                <div style={filesEllipsis}>
                    <a href={questionDetail?.filePath} download>
                        {questionDetail?.fileName}
                    </a>
                </div>
            </div>
            {/* 질문 작성 날짜, 고객사명 */}
            <div>
                <div>{calDateNo(questionDetail?.createdDate)}</div>
                <div>{questionDetail?.customerName}</div>
            </div>
            {/* 내용 */}
            <div
                dangerouslySetInnerHTML={{
                    __html: sanitizer(`${questionDetail?.contents || ''}`),
                }}
            />
        </div>
    );
}

import React from 'react';
import dompurify from 'dompurify';
import { getCookie } from '../../apis/utils/cookies';
import { Question_Viewer } from '../../assets/css/Voc.css';

export default function QuestionViewer({ questionDetail }) {
    const sanitizer = dompurify.sanitize;

    const role = getCookie('userRole');

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
            <div>
                <div
                    onClick={() => {
                        questionDetail?.type === 'INQ' &&
                            window.open(
                                `/inq-list/${role}/${questionDetail?.inquiryId}`,
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
            <div>
                <div>{calDateNo(questionDetail?.createdDate)}</div>
                <div>{questionDetail?.customerName}</div>
            </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: sanitizer(`${questionDetail?.contents || ''}`),
                }}
            />
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import dompurify from 'dompurify';
import { getCookie } from '../../apis/utils/cookies';
import {
    getInquiryDetail,
    getInquiryDetailByManagers,
} from '../../apis/api/inquiry';
import { Question_Viewer } from '../../assets/css/Voc.css';

export default function QuestionViewer({ questionDetail, secretPath }) {
    const sanitizer = dompurify.sanitize;

    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const [inquiryNo, setInquiryNo] = useState('');

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
    const fetchInquiryNo =
        role === 'customer'
            ? async (questionDetail) => {
                  try {
                      const response = await getInquiryDetail(
                          userId,
                          questionDetail?.inquiryId,
                      );
                      setInquiryNo(
                          response.data.createdDate +
                              response.data.inquiryId
                                  .toString()
                                  .padStart(3, '0'),
                      );
                  } catch (error) {
                      console.log('Inquiry 체번 추출 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getInquiryDetailByManagers(
                          questionDetail?.inquiryId,
                      );
                      setInquiryNo(
                          response.data.createdDate +
                              response.data.inquiryId
                                  .toString()
                                  .padStart(3, '0'),
                      );
                  } catch (error) {
                      console.log('Inquiry 체번 추출 실패: ', error);
                  }
              };

    useEffect(() => {
        fetchInquiryNo(questionDetail);
    }, [questionDetail]);

    return (
        <div className={Question_Viewer}>
            <div>
                <div>{getTypeLabel(questionDetail?.type)}</div>
                <div>{questionDetail?.title || ''}</div>
                <div
                    onClick={() => {
                        questionDetail?.type === 'INQ' &&
                            sessionStorage.setItem('userId', userId);
                        window.open(`/inq-list/${role}/${inquiryNo}`, '_blank');
                    }}
                >
                    {questionDetail?.type === 'INQ' && '# Inquiry 상세 조회'}
                </div>
                <div style={filesEllipsis}>
                    <a href={secretPath} download>
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

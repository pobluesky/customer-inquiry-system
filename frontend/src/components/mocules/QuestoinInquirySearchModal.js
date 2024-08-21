import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import {
    Question_Inquiry_Modal_Container,
    Question_Inquiry_Modal,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getInquiry } from '../../apis/api/inquiry';

function QuestionInquirySearchModal() {
    const { userId } = useAuth();
    const navigate = useNavigate();

    const goToLink = () => {
        const path = `/inq-item/customer/${inquiryId}`;
        navigate(path, { target: '_blank', rel: 'noopener noreferrer' });
    };

    const [inquiryData, setInquiries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const contentRef = useRef(null);

    const getInquiryData = async (page) => {
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiry(userId, page);
            setInquiries(response.inquiryInfo);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getInquiryData(currentPage);
    }, [userId, currentPage]);

    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    console.log(inquiryData);

    return (
        <div className={Question_Inquiry_Modal_Container}>
            <div className={Question_Inquiry_Modal} ref={contentRef}>
                {inquiryData.length > 0 ? (
                    inquiryData.map((data) => (
                        <div>
                            <div>#{data.inquiryId}</div>
                            <div>
                                <Button
                                    btnName={data.inquiryType}
                                    width={'84px'}
                                    height={'32px'}
                                    fontSize={'16px'}
                                    textColor={'#ffffff'}
                                    border={'none'}
                                    borderRadius={'12px'}
                                    backgroundColor={'#03507d'}
                                />
                            </div>
                            <div>{data.salesPerson}</div>
                            <div>{data.customerName}</div>
                            <div>{data.productType}</div>
                            <div>
                                <Button
                                    btnName={data.progress}
                                    width={'84px'}
                                    height={'32px'}
                                    fontSize={'16px'}
                                    textColor={'#ffffff'}
                                    border={'none'}
                                    borderRadius={'12px'}
                                    backgroundColor={'#007aff'}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div>데이터가 없습니다.</div>
                )}
            </div>

            <div>
                {/* 페이지 버튼 */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    ◀
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        disabled={index === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages - 1}
                >
                    ►
                </button>
            </div>
        </div>
    );
}

export default QuestionInquirySearchModal;

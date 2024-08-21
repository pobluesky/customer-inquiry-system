import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InquiryItem from '../../components/organisms/InquiryItem';
import { Question_Inquiry_Modal_Container, Question_Inquiry_Modal } from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getInquiry } from '../../apis/api/inquiry';

function QuestionInquirySearchModal() {
    const { userId } = useAuth();

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

    return (
        <div className={Question_Inquiry_Modal_Container}>
            <div className={Question_Inquiry_Modal} ref={contentRef}>
                {inquiryData.length > 0 ? (
                    inquiryData.map((data) => (
                        <Link
                            to={`/inq-item/customer/${data.inquiryId}`}
                            key={data.inquiryId}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InquiryItem style={{ width: '100px' }} inquiryData={data} />
                        </Link>
                    ))
                ) : (
                    <p>데이터가 없습니다.</p>
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

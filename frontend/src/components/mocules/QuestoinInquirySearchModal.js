import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import {
    Question_Inquiry_Modal_Container,
    Question_Inquiry_Modal,
    Page,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getInquiry } from '../../apis/api/inquiry';

function QuestionInquirySearchModal() {
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [inquiryData, setInquiries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const contentRef = useRef(null);

    const getInquiryData = async (page) => {
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiry(userId);
            setInquiries(response.inquiryInfo);
            setFilteredData(response.inquiryInfo); // 전체 데이터를 초기 설정
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getInquiryData();
    }, [userId, currentPage]);

    const clickPageButton = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = () => {
        const filtered = inquiryData.filter(
            (data) => data.inquiryId === parseInt(searchQuery)
        );
        setFilteredData(filtered);
    };

    return (
        <div className={Question_Inquiry_Modal_Container}>
            <div className={Question_Inquiry_Modal} ref={contentRef}>
                <div>
                    {inquiryData.length > 0 && (
                        <div>
                            <div>Inquiry No</div>
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                width={'196px'}
                                height={'26px'}
                                padding={'0 8px 0 8px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                            />
                            <Button
                                btnName={'번호 조회'}
                                width={'96px'}
                                height={'28px'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                border={'none'}
                                borderRadius={'12px'}
                                onClick={handleSearch}
                            />
                        </div>
                    )}
                    {filteredData.length > 0 ? (
                        filteredData.map((data) => (
                            <div key={data.inquiryId}>
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
                                        backgroundColor={
                                            data.progress === '문의 접수'
                                                ? '#ff3b30'
                                                : '#007aff'
                                        }
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>데이터가 없습니다.</p>
                    )}
                </div>
                {filteredData.length > 0 && (
                    <div className={Page}>
                        {/* 페이지 버튼 */}
                        <button
                            onClick={() => clickPageButton(currentPage - 1)}
                            disabled={currentPage === 0}
                        >
                            ◀
                        </button>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => clickPageButton(index)}
                                disabled={index === currentPage}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => clickPageButton(currentPage + 1)}
                            disabled={currentPage >= totalPages - 1}
                        >
                            ►
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestionInquirySearchModal;

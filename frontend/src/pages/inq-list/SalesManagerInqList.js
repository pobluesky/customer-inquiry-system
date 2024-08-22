import React, { useEffect, useRef, useState } from 'react';
import InquiryItem from '../../components/organisms/InquiryItem';
import InquirySearchBox from "../../components/organisms/InquirySearchBox";
import SearchResult from "../../components/mocules/SearchResult";
import { _Link, Paging, PagingButton, PagingArrowButton } from "../../assets/css/Inquiry.css";
import { useAuth } from '../../hooks/useAuth';
import { getInquiry, getInquiryByManagers } from '../../apis/api/inquiry';
import { Link } from 'react-router-dom';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import { getCookie } from '../../apis/utils/cookies';

const SalesManagerInqList = () => {
    const { userId } = useAuth();
    const [inquiryData, setInquiries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const contentRef = useRef(null);

    console.log("아이디: ", userId);
    console.log("쿠키: ", getCookie('userId'));

    const getInquiryData = async (page) => {
        console.log("getInquiryData")
        try {
            const response = await getInquiryByManagers(page);
            setInquiries(response.inquiryInfo);
            setTotalPages(response.totalPages);
            setTotalElements(response.totalElements);
            // 페이지 데이터 로드 후, 화면을 상단으로 스크롤
            if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
            }

            console.log("getInquiryByManagers: ", response);
        } catch (error) {
            console.error('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getInquiryData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <InquirySearchBox />
            <SearchResult searchResult={`${totalElements}`} />

            <div ref={contentRef} className={_Link}>
                {inquiryData.length > 0 ? (
                    inquiryData.map(data => (
                        <Link
                            to={`/inq-list/manager/${data.inquiryId}`}
                            key={data.inquiryId}
                            style={{ paddingBottom: "20px", textDecoration: "none" }}
                        >
                            <InquiryItem inquiryData={data} />
                        </Link>
                    ))
                ) : (
                    <p>데이터가 없습니다.</p>
                )}
            </div>

            <div className={Paging}>
                {/* 페이지 버튼 */}
                <button
                    className={PagingArrowButton}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    ◀
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        className={PagingButton}
                        key={index}
                        onClick={() => handlePageChange(index)}
                        disabled={index === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={PagingArrowButton}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages - 1}
                >
                    ►
                </button>
            </div>
        </div>
    );
};

export default SalesManagerInqList;

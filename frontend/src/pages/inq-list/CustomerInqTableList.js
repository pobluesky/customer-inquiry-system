import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getInquiry } from '../../apis/api/inquiry';
import CollapsibleTable from './Table';
import InqPath from '../../components/atoms/InqPath';
import InquirySearchBox from '../../components/organisms/InquirySearchBox';
import SearchResult from '../../components/mocules/SearchResult'; // CollapsibleTable 임포트 추가

const CustomerInqList = () => {
    const { userId } = useAuth();
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const contentRef = useRef(null);

    const getInquiryData = async (page) => {
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiry(userId, page);
            const inquiryData = response.inquiryInfo;

            // 데이터를 rows 형식으로 변환
            const formattedRows = inquiryData.map(item => ({
                salesPerson: item.salesPerson,
                inquiryType: item.inquiryType,
                productType: item.productType,
                customerName: item.customerName,
                progress: item.progress,
                price: 0,
                history: [
                    {
                        date: '2020-01-05',
                        customerId: item.customerName,
                        amount: 1,
                    }
                ]
            }));

            setRows(formattedRows);
            setTotalPages(response.totalPages);
            setTotalElements(response.totalElements);

            if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
            }
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
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <InquirySearchBox />
            <SearchResult searchResult={`${totalElements}`} />
            <div style={{ width: "90%", margin: "0 auto" }}>
            <CollapsibleTable rows={rows} /> {/* 테이블 컴포넌트에 rows 전달 */}
            {/* 나머지 코드 */}
            </div>
        </div>
    );
};

export default CustomerInqList;

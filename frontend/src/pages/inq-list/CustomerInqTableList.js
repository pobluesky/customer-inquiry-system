import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getAllInquiries } from '../../apis/api/inquiry';
import InqPath from '../../components/atoms/InqPath';
import SearchResult from '../../components/mocules/SearchResult';
import InquirySearchBox
    from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/Table';

const CustomerInqTableList = () => {
    const { userId } = useAuth();
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const contentRef = useRef(null); // 스크롤할 참조
    const paginationRef = useRef(null); // 페이지 네이션 참조

    const getInquiryData = async () => {
        if (!userId) return;

        try {
            const response = await getAllInquiries(userId);
            const inquiryData = response?.inquiryInfo || [];
            setRows(inquiryData);

            if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.log('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getInquiryData();
    }, [userId]);

    // 현재 페이지에 해당하는 데이터 추출
    const paginatedRows = rows.slice(
        currentPage * rowsPerPage,
        currentPage * rowsPerPage + rowsPerPage
    );

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        if (paginationRef.current) {
            paginationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0); // rowsPerPage가 변경되면 첫 페이지로 이동
    };

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <InquirySearchBox />
            <SearchResult searchResult={`${rows.length}`} />
            <div style={{ width: "90%", margin: "0 auto" }}>
                <CollapsibleTable
                    rows={paginatedRows}
                    currentPage={currentPage}
                    rowsPerPage={rowsPerPage}
                    totalRows={rows.length}
                    handlePageChange={handlePageChange}
                    handleRowsPerPageChange={handleRowsPerPageChange}
                    paginationRef={paginationRef}
                    role="customer"
                />
            </div>
        </div>
    );
};

export default CustomerInqTableList;

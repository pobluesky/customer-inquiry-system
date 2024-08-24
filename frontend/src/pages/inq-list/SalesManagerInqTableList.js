import React, { useEffect, useRef, useState } from 'react';
import {
    getAllInquiriesByManagers,
} from '../../apis/api/inquiry';
import SearchResult from '../../components/mocules/SearchResult';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import InquirySearchBox
    from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/Table';

const SalesManagerInqTableList = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const contentRef = useRef(null); // 스크롤할 참조
    const paginationRef = useRef(null); // 페이지 네이션 참조

    const getInquiryData = async () => {

        try {
            const response = await getAllInquiriesByManagers();
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
    }, []);

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
        setCurrentPage(0);
    };

    return (
        <div>
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} role={'sales'} />
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
                    role="sales"
                />
            </div>
        </div>
    );
};

export default SalesManagerInqTableList;

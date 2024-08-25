import React, { useEffect, useRef, useState } from 'react';
import {
    getAllInquiriesByManagers,
} from '../../apis/api/inquiry';
import SearchResult from '../../components/mocules/SearchResult';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import InquirySearchBox
    from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/Table';
import { InqTableContainer } from '../../assets/css/Inquiry.css';

const SalesManagerInqTableList = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const contentRef = useRef(null);
    const paginationRef = useRef(null);

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
        setRowsPerPage(parseInt(event.target.value, 15));
        setCurrentPage(0);
    };

    return (
        <div className={InqTableContainer}>
            <ManagerInqPath mediumCategory={'Inquiry 조회'} role={'sales'} />
            <InquirySearchBox />
            <SearchResult searchResult={`${rows.length}`} />
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
    );
};

export default SalesManagerInqTableList;

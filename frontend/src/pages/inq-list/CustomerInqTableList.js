import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getAllInquiries } from '../../apis/api/inquiry';
import InqPath from '../../components/atoms/InqPath';
import SearchResult from '../../components/mocules/SearchResult';
import InquirySearchBox
    from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/Table';
import { InqTableContainer } from '../../assets/css/Inquiry.css';

const CustomerInqTableList = () => {
    const { userId } = useAuth();
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const contentRef = useRef(null);
    const paginationRef = useRef(null);

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
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
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
                role="customer"
            />
        </div>
    );
};

export default CustomerInqTableList;

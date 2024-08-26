import React, { useEffect, useRef, useState } from 'react';
import SearchResult from '../../components/molecules/SearchResult';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import InquirySearchBox
    from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/Table';
import { InqTableContainer } from '../../assets/css/Inquiry.css';
import { getManagerInquiriesByParameter } from '../../apis/api/inquirySearch';

const QualityManagerInqTableList = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [searchParams, setSearchParams] = useState({});
    const contentRef = useRef(null);
    const paginationRef = useRef(null);

    const getInquiryDataByParameter = async (queryParams = {}) => {

        try {
            const response = await getManagerInquiriesByParameter(queryParams);
            setRows(response);
            setCurrentPage(0);

            if (contentRef.current) {
                contentRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.log('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getInquiryDataByParameter(searchParams);
    }, [searchParams]);

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

    const handleSearch = (newSearchParams) => {
        setSearchParams(newSearchParams);
    };

    return (
        <div className={InqTableContainer}>
            <ManagerInqPath mediumCategory={'Inquiry 조회'} role={'quality'} />
            <InquirySearchBox onSearch={handleSearch} />
            <SearchResult searchResult={`${rows.length}`} />
                <CollapsibleTable
                    rows={paginatedRows}
                    currentPage={currentPage}
                    rowsPerPage={rowsPerPage}
                    totalRows={rows.length}
                    handlePageChange={handlePageChange}
                    handleRowsPerPageChange={handleRowsPerPageChange}
                    paginationRef={paginationRef}
                    role="quality"
                />
        </div>
    );
};

export default QualityManagerInqTableList;

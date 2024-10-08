import React, { useEffect, useRef, useState } from 'react';
import SearchResult from '../../components/molecules/SearchResult';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import InquirySearchBox from '../../components/organisms/inquiry-form/InquirySearchBox';
import CollapsibleTable from '../../components/organisms/inquiry-form/CollapsibleTable';
import { InqTableContainer } from '../../assets/css/Inquiry.css';
import { getSalesManagerInquiriesByParameter } from '../../apis/api/inquirySearch';
import { useAuth } from '../../hooks/useAuth';
import { CircularProgress, Grid } from '@mui/material';

const SalesManagerInqTableList = () => {
    const { role } = useAuth();
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [searchParams, setSearchParams] = useState({});
    const contentRef = useRef(null);
    const paginationRef = useRef(null);
    const [loading, setLoading] = useState(true);

    const getInquiryDataByParameter = async (queryParams = {}) => {
        try {
            const response = await getSalesManagerInquiriesByParameter(queryParams);
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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await getInquiryDataByParameter(searchParams);
            setLoading(false);
        }

        fetchData();
    }, [searchParams]);

    const paginatedRows = rows.slice(
        currentPage * rowsPerPage,
        currentPage * rowsPerPage + rowsPerPage,
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
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} role={role} />
            <InquirySearchBox onSearch={handleSearch} title={'Inquiry 조회'} />

            {loading ? (
                <Grid container justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Grid>
            ) : (
                <>
                    <SearchResult searchResult={`${rows.length}`} />
                    <CollapsibleTable
                        rows={paginatedRows}
                        currentPage={currentPage}
                        rowsPerPage={rowsPerPage}
                        totalRows={rows.length}
                        handlePageChange={handlePageChange}
                        handleRowsPerPageChange={handleRowsPerPageChange}
                        paginationRef={paginationRef}
                        role={role}
                    />
                </>
            )}
        </div>
    );
};

export default SalesManagerInqTableList;
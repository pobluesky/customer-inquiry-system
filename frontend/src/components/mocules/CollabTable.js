import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import {
    getAllCollaboration,
    getCollaborationDetail,
    postCollaborationBySales,
    putDecisionByQuality,
    putCompleteBySales,
} from '../../apis/api/collaboration';
import CollaborationModal from './CollabRequestModal';
import { useAuth } from '../../hooks/useAuth';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(
    colId,
    questionId,
    colReqManager,
    colStatus,
    colContents,
    createdDate,
) {
    return {
        colId,
        questionId,
        colReqManager,
        colStatus,
        colContents,
        createdDate,
    };
}

export default function CollabTable() {
    const { userId } = useAuth();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal, setOpenModal] = useState(false);
    const [collabs, setCollabs] = useState([]);
    const [colDetail, setColDetail] = useState([]);

    const fetchGetCol = async () => {
        try {
            const response = await getAllCollaboration();
            setCollabs(response.data);
        } catch (error) {
            console.error('요약 조회 실패:', error);
        }
    };

    const fetGetColDetail = async (questionId, colId) => {
        try {
            const response = await getCollaborationDetail(questionId, colId);
            setColDetail(response.data);
            console.log(
                '[추후 삭제]상세 데이터 ===============> ',
                response.data,
            );
        } catch (error) {
            console.error('상세 조회 실패:', error);
        }
    };

    useEffect(() => {
        fetchGetCol();
    }, [userId]);

    const columns = [
        {
            id: 'colId',
            label: 'No',
            align: 'center',
            width: 180,
            minWidth: 180,
            // minWidth: 170
        },
        {
            id: 'questionId',
            label: '질문 번호',
            align: 'center',
            width: 180,
            minWidth: 180,
            // minWidth: 100
        },
        {
            id: 'colReqManager',
            label: '담당자',
            align: 'center',
            width: 180,
            minWidth: 180,
            // minWidth: 170,
            // align: 'right',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'colStatus',
            label: '진행 상황',
            align: 'center',
            width: 180,
            minWidth: 180,
            // minWidth: 170,
            // align: 'right',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'colContents',
            label: '내용',
            align: 'center',
            width: 420,
            minWidth: 420,
            // minWidth: 170,
            // align: 'right',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'createdDate',
            label: '등록 일자',
            align: 'center',
            width: 180,
            minWidth: 180,
            // minWidth: 170,
            // align: 'right',
            // format: (value) => value.toFixed(2),
        },
    ];

    const rows = collabs.map((collab) =>
        createData(
            collab.colId,
            collab.questionId,
            collab.colReqManager,
            collab.colStatus,
            collab.colContents,
            collab.createdDate,
        ),
    );

    console.log(collabs);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer
            component={Paper}
            sx={{ width: 1320, margin: '24px auto 0 auto' }}
        >
            <Table
                size="small"
                stickyHeader="true"
                aria-label="custom pagination table"
            >
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                sx={{
                                    minWidth: column.minWidth,
                                    backgroundColor: '#03507d',
                                    color: '#ffffff',
                                    fontWeight: '600',
                                }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                          )
                        : rows
                    ).map((row) => (
                        <TableRow
                            key={row.colId}
                            // sx={{
                            //     '&:last-child td, &:last-child th': {
                            //         border: 0,
                            //     },
                            // }}
                            onClick={() => {
                                fetGetColDetail(row.questionId, row.colId);
                                setOpenModal(true);
                            }}
                        >
                            {/* <TableCell component="th" scope="row"> */}
                            <TableCell
                                sx={{
                                    textAlign: 'center',
                                    width: 180,
                                    backgroundColor: 'green',
                                }}
                            >
                                {row.colId}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center', width: 180 }}>
                                {row.questionId}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center', width: 180 }}>
                                {row.colReqManager}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center', width: 180 }}>
                                {row.colStatus}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center', width: 420 }}>
                                {row.colContents}
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center', width: 180 }}>
                                {row.createdDate.substr(0, 10)}
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow sx={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: -1 },
                            ]}
                            colSpan={6}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
            {openModal && (
                <CollaborationModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
        </TableContainer>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

function Row({ row, role }) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/inq-list/${role}/${row.inquiryId}`);
    };

    return (
        <React.Fragment>
            <TableRow
                sx={{ '& > *': { borderBottom: 'unset' } }}
                onClick={handleClick}
                style={{ cursor: 'pointer' }} // 클릭 가능하게 하기
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={(event) => {
                            event.stopPropagation(); // 이벤트 버블링 방지
                            setOpen(!open);
                        }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.salesPerson}
                </TableCell>
                <TableCell align="right">{row.inquiryType}</TableCell>
                <TableCell align="right">{row.productType}</TableCell>
                <TableCell align="right">{row.customerName}</TableCell>
                <TableCell align="right">{row.progress}</TableCell>
                {/* 추가할 컬럼들 */}
                <TableCell align="right">{row.additionalData1}</TableCell>
                <TableCell align="right">{row.additionalData2}</TableCell>
                <TableCell align="right">{row.additionalData3}</TableCell>
                <TableCell align="right">{row.additionalData4}</TableCell>
                {/* 필요한 만큼 더 추가 */}
                <TableCell align="right">{row.additionalData5}</TableCell>
                <TableCell align="right">{row.additionalData6}</TableCell>
                <TableCell align="right">{row.additionalData7}</TableCell>
                <TableCell align="right">{row.additionalData8}</TableCell>
                {/* 필요한 만큼 더 추가 */}
                <TableCell align="right">{row.additionalData9}</TableCell>
                <TableCell align="right">{row.additionalData10}</TableCell>
                <TableCell align="right">{row.additionalData11}</TableCell>
                <TableCell align="right">{row.additionalData12}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                라인아이템
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>제품유형</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.productType}
                                        </TableCell>
                                        <TableCell>{row.salesPerson}</TableCell>
                                        <TableCell align="right">{row.salesPerson}</TableCell>
                                        <TableCell align="right">
                                            {Math.round(row.amount * row.price * 100) / 100}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable({
    rows,
    currentPage,
    rowsPerPage,
    totalRows,
    handlePageChange,
    handleRowsPerPageChange,
    role
}) {
    return (
        <Paper>
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: '10px',
                    overflowX: 'auto', // 가로 스크롤 활성화
                    whiteSpace: 'nowrap' // 테이블 셀이 줄바꿈되지 않고 한 줄로 유지됨
                }}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#03507d' }}>
                            <TableCell sx={{ color: '#ffffff' }} />
                            <TableCell sx={{ color: '#ffffff' }}>판매계약자</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>문의유형</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>제품</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>고객사</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>진행현황</TableCell>
                            {/* 추가할 컬럼 헤더들 */}
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터1</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터2</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터3</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터4</TableCell>
                            {/* 필요한 만큼 더 추가 */}
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터1</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터2</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터3</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터4</TableCell>
                            {/* 필요한 만큼 더 추가 */}
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터1</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터2</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터3</TableCell>
                            <TableCell align="right" sx={{ color: '#ffffff' }}>추가데이터4</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.inquiryId} row={row} role={role} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={totalRows}
                page={currentPage}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                labelRowsPerPage="Rows per page:"
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Paper>
    );
}

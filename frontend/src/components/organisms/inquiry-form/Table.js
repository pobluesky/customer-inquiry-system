import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
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
                sx={{ '& > *': { borderBottom: 'unset' }}}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <TableCell component="th" scope="row" sx={{ paddingLeft: '80px' }}>
                    {row.inquiryId}</TableCell>
                <TableCell align="left">{row.salesPerson}</TableCell>
                <TableCell align="left">{row.inquiryType}</TableCell>
                <TableCell align="left">{row.productType}</TableCell>
                <TableCell align="left">{row.customerName}</TableCell>
                <TableCell align="left">{row.progress}</TableCell>
                <TableCell align="left">{row.country}</TableCell>
                <TableCell align="left">{row.corporate}</TableCell>
                <TableCell align="left">{row.corporationCode}</TableCell>
                <TableCell align="left">{row.industry}</TableCell>
            </TableRow>
            <TableRow>
                {/*<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>*/}
                {/*    <Collapse in={open} timeout="auto" unmountOnExit>*/}
                {/*        <Box sx={{ margin: 1 }}>*/}
                {/*            <Typography variant="h6" gutterBottom component="div">*/}
                {/*                문의상세*/}
                {/*            </Typography>*/}
                {/*            <Table size="small" aria-label="purchases">*/}
                {/*                <TableHead>*/}
                {/*                    <TableRow>*/}
                {/*                        <TableCell>제품유형</TableCell>*/}
                {/*                        <TableCell>Customer</TableCell>*/}
                {/*                        <TableCell align="right">Amount</TableCell>*/}
                {/*                        <TableCell align="right">Total price ($)</TableCell>*/}
                {/*                    </TableRow>*/}
                {/*                </TableHead>*/}
                {/*                <TableBody>*/}
                {/*                    <TableRow>*/}
                {/*                        <TableCell component="th" scope="row">*/}
                {/*                            {row.productType}*/}
                {/*                        </TableCell>*/}
                {/*                        <TableCell>{row.salesPerson}</TableCell>*/}
                {/*                        <TableCell align="right">{row.salesPerson}</TableCell>*/}
                {/*                        <TableCell align="right">*/}
                {/*                            {Math.round(row.amount * row.price * 100) / 100}*/}
                {/*                        </TableCell>*/}
                {/*                    </TableRow>*/}
                {/*                </TableBody>*/}
                {/*            </Table>*/}
                {/*        </Box>*/}
                {/*    </Collapse>*/}
                {/*</TableCell>*/}
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
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    '& .MuiTableCell-root': {
                        paddingRight: '120px'
                    }
                }}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#03507d' }}>
                            <TableCell sx={{ color: '#ffffff', paddingLeft: '80px' }}>문의번호</TableCell>
                            <TableCell sx={{ color: '#ffffff' }}>판매계약자</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>문의유형</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>제품</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>고객사</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>진행현황</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>국가</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>판매상사</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>법인코드</TableCell>
                            <TableCell align="left" sx={{ color: '#ffffff' }}>산업분류</TableCell>
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
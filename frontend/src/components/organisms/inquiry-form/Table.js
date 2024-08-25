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
                <TableCell component="th" scope="row" className="custom-table-cell" sx={{ paddingLeft: '80px' }}>
                    {row.inquiryId}
                </TableCell>
                <TableCell className="custom-table-cell" align="left">{row.salesPerson}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.inquiryType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.productType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.customerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.progress}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.country}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.corporate}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.corporationCode}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.industry}</TableCell>
            </TableRow>
            <TableRow>
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
                    // '& .MuiTableCell-root': {
                    //     paddingRight: '120px'
                    // }
                }}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#03507d' }}>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff', paddingLeft: '80px' }}>문의번호</TableCell>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff' }}>판매계약자</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>문의유형</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>제품</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>고객사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>진행현황</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>국가</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>판매상사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>법인코드</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>산업분류</TableCell>
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
                rowsPerPageOptions={[10, 15, 25]}
            />
        </Paper>
    );
}

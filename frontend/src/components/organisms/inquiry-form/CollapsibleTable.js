import React, { useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import ForwardedRow from './Row'; // Row 컴포넌트 import

export default function CollapsibleTable({
    rows,
    currentPage,
    rowsPerPage,
    totalRows,
    handlePageChange,
    handleRowsPerPageChange,
    role,
    updateData,
}) {
    const rowRefs = useRef([]);

    const handleButtonClick = async () => {
        const promises = rowRefs.current.map((ref) => ref && ref.handleSubmit());
        await Promise.all(promises);

        updateData();
    };

    return (
        <Paper>
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: '10px',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                }}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#03507d' }}>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff', paddingLeft: '60px' }}>
                                <Button
                                    onClick={handleButtonClick}
                                    variant="contained"
                                    color="secondary"
                                    sx={{
                                        backgroundColor: '#ffffff',
                                        color: '#03507d',
                                        width: '85px',
                                        borderRadius: '10px',
                                        fontWeight: '700',
                                        '&:hover': {
                                            backgroundColor: '#03507d',
                                            color: '#ffffff',
                                        },
                                    }}
                                >
                                    담당자 배정
                                </Button>
                            </TableCell>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff' }}>문의번호</TableCell>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff' }}>판매계약자</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>문의유형</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>제품</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>고객사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>판매담당자</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>품질담당자</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>진행현황</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>국가</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>판매상사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>법인코드</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff' }}>산업분류</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <ForwardedRow
                                key={row.inquiryId}
                                row={row}
                                role={role}
                                ref={(el) => rowRefs.current[index] = el}
                            />
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
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
import { useEffect, useState } from 'react';
import { _Table } from '../../../assets/css/Inquiry.css';
import CircleIcon from '@mui/icons-material/Circle';
import { BorderLinearProgress } from '../../molecules/BorderLinearProgress';

function Row({ row, role }) {
    const [percentage, setPercentage] = useState(0);
    const [inquiryTypeColor, setInquiryTypeColor] = useState('');
    const navigate = useNavigate();

    const calculatePercentage = () => {
        if (row.progress === '문의제출') {
            setPercentage(5);
        } else if (row.progress === '문의접수') {
            setPercentage(20);
        } else if (row.progress === '1차검토완료') {
            setPercentage(35);
            if (row.inquiryType === '견적 문의') {
                setPercentage(60);
            }
        } else if (row.progress === '품질검토요청') {
            setPercentage(45);
        } else if (row.progress === '품질검토접수') {
            setPercentage(65);
        } else if (row.progress === '품질검토완료') {
            setPercentage(80);
        } else if (row.progress === '최종검토완료') {
            setPercentage(100);
        }
    }

    useEffect(() => {
        calculatePercentage();
    }, [row.progress]);

    const selectInquiryTypeColor = () => {
        if (row.inquiryType === '견적 문의') {
            setInquiryTypeColor('primary');
        } else if (row.inquiryType === '품질+견적 문의') {
            setInquiryTypeColor('secondary')
        }
    }

    useEffect(() => {
        selectInquiryTypeColor();
    }, [row.inquiryType]);

    const handleClick = () => {
        navigate(`/inq-list/${role}/${row.inquiryId}`);
    };

    return (
        <React.Fragment>
            <TableRow
                sx={{ '& > *': { borderBottom: 'unset' }}}
                onClick={handleClick}
                style={{ cursor: 'pointer', border: '0.05em solid #c1c1c1' }}
                className={_Table}
            >
                <TableCell component="th" scope="row" className="custom-table-cell" sx={{ paddingLeft: '80px' }}>
                    {row.inquiryId}
                </TableCell>
                <TableCell className="custom-table-cell" align="left">{row.salesPerson}</TableCell>
                <TableCell className="custom-table-cell" align="left">
                    <CircleIcon color={inquiryTypeColor} style={{ width: '10px', margin: '0 4px 0 0' }} />
                    {row.inquiryType}
                </TableCell>
                <TableCell className="custom-table-cell" align="left">{row.productType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.customerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.progress}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.country}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.corporate}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.corporationCode}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.industry}</TableCell>
                <TableCell className="custom-table-cell" align="left" sx={{ width: '120px' }}>
                    <BorderLinearProgress variant="determinate" value={percentage} />
                </TableCell>
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
                }}
            >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#03507d' }}>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff', paddingLeft: '80px', fontWeight: '700' }}>문의번호</TableCell>
                            <TableCell className="custom-table-cell" sx={{ color: '#ffffff', fontWeight: '700' }}>판매계약자</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>문의유형</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>제품</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>고객사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>진행현황</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>국가</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>판매상사</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>법인코드</TableCell>
                            <TableCell className="custom-table-cell" align="left" sx={{ color: '#ffffff', fontWeight: '700' }}>산업분류</TableCell>
                            <TableCell className="custom-table-cell" align="center" sx={{ color: '#ffffff', fontWeight: '700' }}>Inquiry 진행률</TableCell>
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

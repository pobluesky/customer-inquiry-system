import * as React from 'react';
// import PropTypes from 'prop-types';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
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
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// Row.propTypes = {
//     row: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         calories: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//         price: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 date: PropTypes.string.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 amount: PropTypes.number.isRequired,
//             }),
//         ).isRequired,
//     }).isRequired,
// };

export default function CollapsibleTable({ rows }) { // rows를 props로 받음
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>판매계약자</TableCell>
                        <TableCell align="right">문의유형</TableCell>
                        <TableCell align="right">제품</TableCell>
                        <TableCell align="right">고객사</TableCell>
                        <TableCell align="right">진행현황</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.salesPerson} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// CollapsibleTable.propTypes = {
//     rows: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             calories: PropTypes.number.isRequired,
//             fat: PropTypes.number.isRequired,
//             carbs: PropTypes.number.isRequired,
//             protein: PropTypes.number.isRequired,
//             price: PropTypes.number.isRequired,
//             history: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     date: PropTypes.string.isRequired,
//                     customerId: PropTypes.string.isRequired,
//                     amount: PropTypes.number.isRequired,
//                 }),
//             ).isRequired,
//         }),
//     ).isRequired,
// };

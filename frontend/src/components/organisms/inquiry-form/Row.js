import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import {
    putManagerAllocate,
} from '../../../apis/api/inquiry';
import { _Table } from '../../../assets/css/Inquiry.css';
import { BorderLinearProgress } from '../../molecules/BorderLinearProgress';

function Row({ row, role }, ref) {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
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

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
    };

    const handleSubmit = async () => {
        try {
            if (isChecked && !isDisabled) {
                await putManagerAllocate(row.inquiryId);
                setIsDisabled(true);
                console.log('담당자 할당 성공:', row.inquiryId);
            }
        } catch (error) {
            console.log('Error putting Manager Allocation:', error);
        }
    };

    useImperativeHandle(ref, () => ({
        handleSubmit,
    }));

    useEffect(() => {
        if (role === 'sales') {
            setIsDisabled(row.salesManagerName !== '-');
            setIsChecked(row.salesManagerName !== '-');
        } else if (role === 'quality') {
            setIsDisabled(row.qualityManagerName !== '-');
            setIsChecked(row.qualityManagerName!== '-');
        } else {
            setIsDisabled(false);
        }
    }, [row.salesManagerName, row.qualityManagerName]);

    return (
        <React.Fragment>
            <TableRow
                className={_Table}
                sx={{ '& > *': { borderBottom: 'unset' } }}
                style={{ cursor: 'pointer', border: '0.05em solid #c1c1c1' }}
                onClick={handleClick}
            >
                <TableCell
                    component="th"
                    scope="row"
                    className="custom-table-cell"
                    sx={{ paddingLeft: '80px' }}
                >
                    <Checkbox
                        checked={isChecked}
                        disabled={isDisabled}
                        onClick={(e) => e.stopPropagation()}
                        onChange={handleCheckboxChange}
                        sx={{
                            color: isDisabled ? '#ffffff' : '#03507d',
                        }}
                    />
                </TableCell>
                <TableCell className="custom-table-cell" align="left">{row.inquiryId}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.salesPerson}</TableCell>
                <TableCell className="custom-table-cell" align="left">
                    <CircleIcon color={inquiryTypeColor} style={{ width: '10px', margin: '0 4px 0 0' }} />
                    {row.inquiryType}
                </TableCell>
                <TableCell className="custom-table-cell" align="left">{row.productType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.customerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.salesManagerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.qualityManagerName}</TableCell>
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

const ForwardedRow = forwardRef(Row);

export default ForwardedRow;

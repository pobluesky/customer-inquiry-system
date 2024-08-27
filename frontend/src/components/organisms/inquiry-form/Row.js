import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from 'react';
import { TableRow, TableCell, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
    putManagerAllocate,
} from '../../../apis/api/inquiry';
import { _Table } from '../../../assets/css/Inquiry.css';

function Row({ row, role }, ref) {
    const [isChecked, setIsChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

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
        if (role === 'SALES') {
            setIsDisabled(row.salesManagerName !== '-');
            setIsChecked(row.salesManagerName !== '-');
        } else if (role === 'QUALITY') {
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
                sx={{ '& > *': { borderBottom: 'unset' }, }}
                style={{ cursor: 'pointer' }}
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
                <TableCell className="custom-table-cell" align="left">{row.inquiryType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.productType}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.customerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.salesManagerName}</TableCell>
                <TableCell className="custom-table-cell" align="left">{row.qualityManagerName}</TableCell>
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

const ForwardedRow = forwardRef(Row);

export default ForwardedRow;

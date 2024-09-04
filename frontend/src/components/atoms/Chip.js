import React from 'react';
import { Chip } from '@mui/material';

function InquiryTypeBadge({ inquiryType }) {
    const getBackgroundColor = () => {
        switch (inquiryType) {
            case '견적 문의':
                return '#c5deda';
            case '품질+견적 문의':
                return '#f7edda';
            default:
                return '#000000';
        }
    };

    return (
        <Chip
            label={inquiryType}
            style={{
                borderRadius: '20px',
                width: '90%',
                height: '35px',
                fontWeight: '800',
                color: '#666a73',
                backgroundColor: getBackgroundColor(),
                justifyContent: 'center',
            }}
        />
    );
}

export default InquiryTypeBadge;

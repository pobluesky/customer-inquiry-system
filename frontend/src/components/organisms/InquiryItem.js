import React from 'react';
import { _InquiryItem } from '../../assets/css/Inquiry.css';
import InquiryBox from "../mocules/InquiryBox";

// InquiryItem 컴포넌트는 각 문의 항목의 세부 정보를 표시합니다.
const InquiryItem = ({ inquiryData }) => {
  const {
    inquiryId,
    inquiryType,
    salesPerson,
    customerName,
    progress,
    productType
  } = inquiryData;

  return (
      <div className={_InquiryItem}>
        <InquiryBox
            inquiryId={inquiryId}
            inquiryType={inquiryType}
            salesPerson={salesPerson}
            progress={progress}
            customerName={customerName}
            productType={productType}
        />
      </div>
  );
};

export default InquiryItem;

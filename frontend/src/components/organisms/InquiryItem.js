import React from 'react';
import Label from "../atoms/Label";
import Inquiry from "../mocules/Inquiry";
import {_InquiryItem} from '../../assets/css/Inquiry.css';

const InquiryItem = ({inquiryData}) => {
  const {
    project,
    inquiryId,
    inquiryType,
    salesPerson,
    customer,
    progress,
    productType,
    inquiryStandard,
    thickness,
    width
  } = inquiryData;

  return (
      <div className={_InquiryItem}>
        <Label text={project}/>
        <Inquiry inquiryId={inquiryId} inquiryType={inquiryType}
                 salesPerson={salesPerson} progress={progress} customer={customer}
                 productType={productType} inquiryStandard={inquiryStandard}
                 thickness={thickness} width={width}/>
      </div>
  );
};

export default InquiryItem;
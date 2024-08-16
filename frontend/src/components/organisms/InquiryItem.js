import React from 'react';
import ListLabel from "../mocules/ListLabel";
import {_InquiryItem} from '../../assets/css/Inquiry.css';
import InquiryBox from "../mocules/InquiryBox";

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
        <ListLabel content={"프로젝트"} text={project}/>
        <InquiryBox inquiryId={inquiryId} inquiryType={inquiryType}
                    salesPerson={salesPerson} progress={progress} customer={customer}
                    productType={productType} inquiryStandard={inquiryStandard}
                    thickness={thickness} width={width} />
      </div>
  );
};

export default InquiryItem;
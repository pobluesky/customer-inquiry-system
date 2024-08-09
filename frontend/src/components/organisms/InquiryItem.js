import React from 'react';
import ProjectLabel from "../mocules/ProjectLabel";
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
        <ProjectLabel text={project}/>
        <InquiryBox inquiryId={inquiryId} inquiryType={inquiryType}
                    salesPerson={salesPerson} progress={progress} customer={customer}
                    productType={productType} inquiryStandard={inquiryStandard}
                    thickness={thickness} width={width} />
      </div>
  );
};

export default InquiryItem;
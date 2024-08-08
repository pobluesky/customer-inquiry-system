import React from 'react';
import Label from "../atoms/Label";
import Inquiry from "../mocules/Inquiry";
import { _InquiryItem } from '../../assets/css/Inquiry.css';

const InquiryItem = () => {
  return (
      <div className={_InquiryItem}>
        <Label text1={"프로젝트"} text2={"Wistier PJT"}/>
        <Inquiry />
      </div>
  );
};

export default InquiryItem;
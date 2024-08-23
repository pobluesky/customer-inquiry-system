import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
  AdditionalRequestForm,
  BasicInfoForm, FileForm, FinalReviewTextForm, InquiryHistoryForm,
  InquiryNewForm, ReviewTextForm, SalesInfoForm
} from "../../components/organisms/inquiry-form";

function InqItem() {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    return (
        <div>
          <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
          <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} />
          {/*<InquiryNewForm />*/}
          {/*<BasicInfoForm />*/}
          {/*<InquiryHistoryForm />*/}
          <SalesInfoForm />
          {/*<AdditionalRequestForm />*/}
          <ReviewTextForm />
          {/*<FileForm fileForm={"협업첨부파일"}/>*/}
          {/*<FileForm fileForm={"첨부파일"}/>*/}
          {/*<FileForm fileForm={"파일첨부"}/>*/}
          {/*<Offersheet inquiryId={1} />*/}
          <QualityReviewTextForm />
          <FinalReviewTextForm />
        </div>
    )
}

export default InqItem;

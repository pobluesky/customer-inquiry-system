import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from "../../components/mocules/RequestBar";
import {
  InquiryNewForm,
  BasicInfoForm,
  InquiryHistoryForm,
  SalesInfoForm,
  AdditionalRequestForm,
  ReviewTextForm,
  FileForm,
  OfferSheet,
  QualityReviewTextForm,
  FinalReviewTextForm
} from '../../components/organisms/inquiry-form';
import { getInquiry } from '../../apis/api/inquiry';

function InqForm() {
    useEffect(() => {
        getInquiry();
    }, []);

    return (
        <div>
          <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
          <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} />
          <InquiryNewForm />
          <BasicInfoForm />
          <InquiryHistoryForm />
          <SalesInfoForm />
          <AdditionalRequestForm />
          <ReviewTextForm />
          <FileForm fileForm={"협업첨부파일"}/>
          <FileForm fileForm={"첨부파일"}/>
          <FileForm fileForm={"파일첨부"}/>
          <OfferSheet />
          <QualityReviewTextForm />
          <FinalReviewTextForm />
        </div>
    );
}

export default InqForm;

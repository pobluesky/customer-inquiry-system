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
  Offersheet,
  QualityReviewTextForm,
  FinalReviewTextForm
} from '../../components/organisms/inquiry-form';
import { getInquiry, postInquiry } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';

function InqForm() {
    const { userId } = useAuth();

    const [formData, setFormData] = useState({
        country: '',
        corporate: '',
        salesPerson: '',
        inquiryType: '',
        industry: '',
        corporationCode: '',
        productType: '',
        progress: 'RECEIPT',
        customerRequestDate: '',
        additionalRequests: '',
        files: '',
        responseDeadline: '',
        elapsedDays: '',
        isActivated: true,
    });

    return (
        <div>
          <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
          <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} />
          <InquiryNewForm userId={userId} />
          {/*<BasicInfoForm />*/}
          <InquiryHistoryForm userId={userId} />
          {/*<SalesInfoForm />*/}
          <AdditionalRequestForm userId={userId} />
          {/*<ReviewTextForm />*/}
          {/*<FileForm fileForm={"협업첨부파일"}/>*/}
          {/*<FileForm fileForm={"첨부파일"}/>*/}
          <FileForm fileForm={"파일첨부"} userId={userId} />
          {/*<Offersheet />*/}
          {/*<QualityReviewTextForm />*/}
          {/*<FinalReviewTextForm />*/}
        </div>
    );
}

export default InqForm;

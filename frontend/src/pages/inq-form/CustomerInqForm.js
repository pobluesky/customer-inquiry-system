import React, { useState } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from "../../components/mocules/RequestBar";
import {
    InquiryNewForm,
    InquiryHistoryForm,
    AdditionalRequestForm,
    FileForm,
} from '../../components/organisms/inquiry-form';
import { postInquiry } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';

function CustomerInqForm() {
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

    // 폼 데이터 변경 핸들러
    const handleFormDataChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    // Inquiry 등록 버튼 클릭 핸들러
    const handleSubmit = async () => {
        try {
            const response = await postInquiry(userId, formData);
            console.log('Inquiry submitted successfully:', response);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        }
    };

    console.log(formData);

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} onSubmit={handleSubmit} />
            <InquiryNewForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <InquiryHistoryForm userId={userId} />
            <AdditionalRequestForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <FileForm fileForm={"파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
        </div>
    );
}

export default CustomerInqForm;

import React, { useState } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from "../../components/mocules/RequestBar";
import {
    InquiryNewForm,
    InquiryHistoryForm,
    AdditionalRequestForm,
    FileForm,
} from '../../components/organisms/inquiry-form';
import { postInquiry, postLineItems } from '../../apis/api/inquiry';
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

    const [lineItems, setLineItems] = useState([]);

    // 라인아이템 변경 핸들러
    const handleLineItemsChange = (newLineItems) => {
        setLineItems(prevLineItems => {
            if (JSON.stringify(prevLineItems) !== JSON.stringify(newLineItems)) {
                return newLineItems;
            }
            return prevLineItems;
        });
    };

    // Inquiry 등록 버튼 클릭 핸들러
    const handleSubmit = async () => {
        try {
            // Post the inquiry data
            const response = await postInquiry(userId, formData);
            console.log('Inquiry submitted successfully:', response);

            // Assuming the response contains the inquiry ID
            const inquiryId = response.data.inquiryId;
            console.log('Inquiry ID:', inquiryId);

            // Post the line items data
            console.log('Line items');
            const lineItemsResponse = await postLineItems(inquiryId, lineItems);
            console.log('Line items submitted successfully:', lineItemsResponse);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        }
    };

    console.log(formData);
    console.log(lineItems);

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} onSubmit={handleSubmit} />
            <InquiryNewForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <InquiryHistoryForm userId={userId}
                                productType={formData.productType}
                                onLineItemsChange={handleLineItemsChange} />
            <AdditionalRequestForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <FileForm fileForm={"파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
        </div>
    );
}

export default CustomerInqForm;

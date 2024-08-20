import React, { useEffect, useState } from 'react';
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
import { getUserInfoByCustomers } from '../../apis/api/auth';

function CustomerInqForm() {
    const { userId } = useAuth();
    const [userInfo, setUserInfo] = useState(null);

    const [formData, setFormData] = useState({
        additionalRequests: '',
        corporate: '',
        corporationCode: '(주)포스코',
        country: '',
        customerCode: '',
        customerId: null,
        customerName: '',
        customerRequestDate: '',
        files: [],
        industry: '',
        inquiryId: null,
        inquiryType: '',
        name: '',
        email: '',
        phone: '',
        productType: '',
        progress: 'RECEIPT',
        salesPerson: '',
        reviewText: '',
        finalReviewText: '',
    });

    const getUserInfo = async () => {
        if (!userId) {
            return;
        }
        try {
            const response = await getUserInfoByCustomers(userId);
            setUserInfo(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching User Info:', error);
        }
    }

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
            const response = await postInquiry(userId, formData);
            console.log('Inquiry submitted successfully:', response);

            const inquiryId = response.data.inquiryId;
            console.log('Inquiry ID:', inquiryId);

            console.log('Line items');
            const lineItemsResponse = await postLineItems(inquiryId, lineItems);
            console.log('Line items submitted successfully:', lineItemsResponse);
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        }
    };

    console.log(formData);
    console.log(lineItems);

    useEffect(() => {
        if (userInfo) {
            setFormData(prevFormData => ({
                ...prevFormData,
                customerCode: userInfo.data.customerCode || '',
                customerName: userInfo.data.customerName || '',
                name: userInfo.data.name || '',
                email: userInfo.data.email || '',
                phone: userInfo.data.phone || '',
            }));
        }
    }, [userInfo]);

    useEffect(() => {
        getUserInfo();
    }, [userId]);

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

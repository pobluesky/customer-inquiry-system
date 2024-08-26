import React, { useEffect, useState } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from "../../components/molecules/RequestBar";
import {
    InquiryNewForm,
    InquiryHistoryForm,
    AdditionalRequestForm,
    FileForm,
} from '../../components/organisms/inquiry-form';
import { postInquiry } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { useForm } from 'react-hook-form';
import { InquiryCompleteAlert } from '../../utils/actions';
import { useNavigate } from 'react-router-dom';
import { InqTableContainer } from '../../assets/css/Inquiry.css';
import { postNotificationByCustomers } from '../../apis/api/notification';

function CustomerInqForm() { // 고객사 Inquiry 작성 페이지
    const { userId, role, userName } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userInfo, setUserInfo] = useState(null);

    const [formData, setFormData] = useState({
        // inquiry
        additionalRequests: '',
        corporate: '',
        corporationCode: '(주)포스코',
        country: '',
        customerCode: '',
        customerId: userId,
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
        lineItemResponseDTOs: [],
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
            console.log('Error fetching User Info:', error);
        }
    }

    const handleFormDataChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleInquirySubmit = async (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        try {
            const inquiryResponse = await postInquiry(userId, {
                ...formData,
                lineItemRequestDTOs: formData.lineItemRequestDTOs,
            });
            const notificationResponse = await postNotificationByCustomers(userId, {
                notificationContents: `${formData.name}님의 Inquiry가 접수되었습니다.`,
            })
            console.log('Inquiry posted successfully:', inquiryResponse);
            console.log('Notification posted successfully:', notificationResponse);

            InquiryCompleteAlert();
            setTimeout(() => {
                navigate(`/inq-list/${role}`);
            }, '2000');
        } catch (error) {
            console.log('Error submitting inquiry:', error);
        }
    };

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
        if (!userId) {
            return;
        }
        getUserInfo();
    }, [userId]);

    return (
        <div className={InqTableContainer}>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"}
                        onSubmit={handleSubmit(handleInquirySubmit)} />
            <InquiryNewForm
                register={register}
                errors={errors}
                formData={formData}
                handleFormDataChange={handleFormDataChange} />
            <InquiryHistoryForm
                productType={formData.productType}
                lineItemData={formData.lineItemResponseDTOs}
                onLineItemsChange={(lineItems) => handleFormDataChange(
                    'lineItemRequestDTOs', lineItems)}
            />
            <AdditionalRequestForm formData={formData}
                                   handleFormDataChange={handleFormDataChange} />
            <FileForm fileForm={"파일첨부"} formData={formData}
                      handleFormDataChange={handleFormDataChange} />
        </div>
    );
}

export default CustomerInqForm;

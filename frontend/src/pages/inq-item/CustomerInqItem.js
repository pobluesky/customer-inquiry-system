import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    BasicInfoForm, FinalReviewTextForm, InquiryHistoryForm,
    QualityReviewTextForm, ReviewTextForm, FileFormItem,
    Offersheet
} from "../../components/organisms/inquiry-form";
import { useAuth } from '../../hooks/useAuth';
import { getInquiryDetail } from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';

function CustomerInqItem() {
    const { userId } = useAuth();
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const [formData, setFormData] = useState({
        additionalRequests: '',
        corporate: '',
        corporationCode: '',
        country: inquiriesDataDetail?.country,
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
        progress: '',
        salesPerson: '',
        responseDeadline: '',
        elapsedDays: '',
        isActivated: true,
    });

    const getInquiryDataDetail = async () => {
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiryDetail(userId, id);
            setInquiriesDataDetail(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching InquiryDetail:', error);
        }
    };

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

    console.log('inquiryId: ', inquiriesDataDetail?.inquiryId);

    useEffect(() => {
        if (inquiriesDataDetail && userInfo) {
            setFormData(prevFormData => ({
                ...prevFormData,
                additionalRequests: inquiriesDataDetail.additionalRequests || '',
                corporate: inquiriesDataDetail.corporate || '',
                corporationCode: inquiriesDataDetail.corporationCode || '',
                country: inquiriesDataDetail.country || '',
                customerId: inquiriesDataDetail.customerId || null,
                customerName: inquiriesDataDetail.customerName || '',
                customerRequestDate: inquiriesDataDetail.customerRequestDate || '',
                files: inquiriesDataDetail.files || [],
                industry: inquiriesDataDetail.industry || '',
                inquiryId: inquiriesDataDetail.inquiryId || null,
                inquiryType: inquiriesDataDetail.inquiryType || '',
                name: inquiriesDataDetail.name || '',
                email: userInfo.data.email || '',
                phone: userInfo.data.phone || '',
                productType: inquiriesDataDetail.productType || '',
                progress: inquiriesDataDetail.progress || '',
                salesPerson: inquiriesDataDetail.salesPerson || '',

            }));
        }
    }, [inquiriesDataDetail, userInfo]);

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo()
    }, [userId, id]);

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} />

            <BasicInfoForm formData={formData} />
            <InquiryHistoryForm onLineItemsChange={() => {}} />
            <AdditionalRequestForm formData={formData} />
            <ReviewTextForm />
            <FileFormItem fileForm={"첨부파일"} formData={formData} />
            <Offersheet />
            <QualityReviewTextForm />
            <FinalReviewTextForm />
        </div>
    )
}

export default CustomerInqItem;

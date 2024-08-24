import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    BasicInfoForm, InquiryHistoryForm,
    FileFormItem,
    Offersheet
} from "../../components/organisms/inquiry-form";
import { useAuth } from '../../hooks/useAuth';
import { getInquiryDetail } from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getReviews } from '../../apis/api/review';
import FinalReviewTextForm
    from '../../components/organisms/inquiry-form/review-form/FinalReviewTextForm';

function CustomerInqItem() { // 고객사 Inquiry 조회 페이지
    const { userId } = useAuth();
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState(null);

    const [formData, setFormData] = useState({
        additionalRequests: '',
        corporate: '',
        corporationCode: '',
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
        progress: '',
        salesPerson: '',
        reviewText: '',
        finalReviewText: '',
        lineItemResponseDTOs: [],
    });

    const getInquiryDataDetail = async () => {
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiryDetail(userId, id);
            setInquiriesDataDetail(response.data);
            setFormData(prevData => ({
                ...prevData,
                lineItemResponseDTOs: response.data.lineItemResponseDTOs || []
            }));
        } catch (error) {
            console.log('Error fetching InquiryDetail:', error);
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
            console.log('Error fetching User Info:', error);
        }
    }

    const getReview = async () => {
        if (!userId) {
            return;
        }
        try {
            const response = await getReviews(id);
            setReviewData(response.data);
            return response.data;
        } catch (error) {
            console.log('Error fetching Reviews:', error);
        }
    }

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
    }, [userId, id]);

    useEffect(() => {
        if (inquiriesDataDetail && userInfo) {
            setFormData(prevFormData => ({
                ...prevFormData,
                additionalRequests: inquiriesDataDetail.additionalRequests || '',
                corporate: inquiriesDataDetail.corporate || '',
                corporationCode: inquiriesDataDetail.corporationCode || '',
                country: inquiriesDataDetail.country || '',
                customerCode: userInfo.data.customerCode || '',
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
                reviewText: reviewData?.reviewText || '',
                finalReviewText: reviewData?.finalReviewText || '',
                lineItemResponseDTOs: inquiriesDataDetail.lineItemResponseDTOs || []
            }));
        }
    }, [inquiriesDataDetail, userInfo, reviewData]);

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} />
            <RequestBar requestBarTitle={"Inquiry 상세조회"} />

            <BasicInfoForm formData={formData} />
            <InquiryHistoryForm
                productType={inquiriesDataDetail?.productType}
                lineItemData={formData.lineItemResponseDTOs}
                onLineItemsChange={(newLineItems) => setFormData(prev => ({ ...prev, lineItemResponseDTOs: newLineItems }))}
            />
            <AdditionalRequestForm formData={formData} readOnly={true} />
            {/*<ReviewTextForm formData={formData} />*/}
            <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
            <Offersheet />
            <FinalReviewTextForm formData={formData} />
        </div>
    )
}

export default CustomerInqItem;

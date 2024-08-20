import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    BasicInfoForm, FinalReviewTextForm, InquiryHistoryForm,
    QualityReviewTextForm, ReviewTextForm, FileFormItem,
    OfferSheet
} from "../../components/organisms/inquiry-form";
import { useAuth } from '../../hooks/useAuth';
import { getInquiryDetail } from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getReviews } from '../../apis/api/review';
import offersheet from '../../components/organisms/inquiry-form/OfferSheet';
import { postOfferSheet } from '../../apis/api/offersheet';

function SalesManagerInqItem() { // 고객사 Inquiry 조회
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState(null);

    const [offerSheetData, setOfferSheetData] = useState({
        priceTerms: '',
        paymentTerms: '',
        shipment: '',
        validity: '',
        destination: '',
        remark: '',
        receipts: []
    });

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
        reviewText: '',
        finalReviewText: '',
    });

    const getInquiryDataDetail = async () => {
        if (!customerId) {
            return;
        }
        try {
            const response = await getInquiryDetail(customerId, id);
            setInquiriesDataDetail(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching InquiryDetail:', error);
        }
    };

    const getUserInfo = async () => {
        if (!customerId) {
            return;
        }
        try {
            const response = await getUserInfoByCustomers(customerId);
            setUserInfo(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching User Info:', error);
        }
    }

    const getReview = async () => {
        if (!customerId) {
            return;
        }
        try {
            const response = await getReviews(id);
            setReviewData(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching Reviews:', error);
        }
    }

    console.log('inquiryId: ', inquiriesDataDetail?.inquiryId);

    useEffect(() => {
        if (inquiriesDataDetail && userInfo) {
            setCustomerId(inquiriesDataDetail.customerId);
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
                reviewText: reviewData?.reviewText || '',
                finalReviewText: reviewData?.finalReviewText || '',
            }));
        }
    }, [inquiriesDataDetail, userInfo, reviewData]);

    const [customerId, setCustomerId] = useState(formData.customerId);

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
    }, [customerId, id]);

    const handleSubmit = async () => {
        if (formData.inquiryId) {
            try {
                const response = await postOfferSheet(customerId, offerSheetData);
                console.log('Offer sheet posted successfully:', response);
            } catch (error) {
                console.error('Error posting offer sheet:', error);
            }
        }
    }

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} onSubmit={handleSubmit} />

            <BasicInfoForm formData={formData} />
            <InquiryHistoryForm onLineItemsChange={() => {}} />
            <AdditionalRequestForm formData={formData} />
            <ReviewTextForm formData={formData} />
            <FileFormItem fileForm={"첨부파일"} formData={formData} />
            <OfferSheet offerSheet={offerSheetData} setOfferSheet={setOfferSheetData} />
            <QualityReviewTextForm />
            <FinalReviewTextForm formData={formData} />
        </div>
    )
}

export default SalesManagerInqItem;

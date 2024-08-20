import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    BasicInfoForm, FinalReviewTextForm, InquiryHistoryForm,
    QualityReviewTextForm, ReviewTextForm, FileFormItem,
    Offersheet, SalesInfoForm, FileForm,
} from '../../components/organisms/inquiry-form';
import { useAuth } from '../../hooks/useAuth';
import { getInquiryDetail } from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getReviews, postReviews } from '../../apis/api/review';
import offersheet from '../../components/organisms/inquiry-form/Offersheet';
import { postOffersheet } from '../../apis/api/offersheet';

function SalesManagerInqItem() { // 고객사 Inquiry 조회
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState();

    const [formData, setFormData] = useState({
        additionalRequests: '',
        corporate: '',
        corporationCode: '',
        country: '',
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

        // review
        contract: '',
        thicknessNotify: '',
        reviewText: '',
        attachmentFile: '',
        finalReviewText: '',
        tsReviewReq: ''
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
                const offerSheetResponse = await postOffersheet(id);
                const reviewResponse = await postReviews(id);

                console.log('Offer sheet posted successfully:', offerSheetResponse);
                console.log('Review posted successfully:', reviewResponse);
            } catch (error) {
                console.error('Error posting offer sheet:', error);
            }
        }
    }

    const handleFormDataChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    return (
        <div>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} onSubmit={handleSubmit} />
            <BasicInfoForm formData={formData} />
            <InquiryHistoryForm onLineItemsChange={() => {}} />

            {/* Review Post & Get */}
            <SalesInfoForm formData={formData} />
            <ReviewTextForm formData={formData} />
            <FinalReviewTextForm formData={formData} />


            <QualityReviewTextForm />
            <AdditionalRequestForm formData={formData} />

            <FileForm fileForm={"파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
            <FileFormItem fileForm={"첨부파일"} formData={formData} />
            <Offersheet />
        </div>
    )
}

export default SalesManagerInqItem;

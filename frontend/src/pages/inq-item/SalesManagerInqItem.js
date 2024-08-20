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
import {
    getInquiryDetail,
    getInquiryDetailByManagers,
} from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getReviews, postReviews } from '../../apis/api/review';
import offersheet from '../../components/organisms/inquiry-form/Offersheet';
import { postOffersheet } from '../../apis/api/offersheet';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';

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
        if (!id) {
            return;
        }
        try {
            const response = await getInquiryDetailByManagers(id);
            setInquiriesDataDetail(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching InquiryDetail:', error);
        }
    };

    const getUserInfo = async () => {
        if (!id) {
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
        if (!id) {
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
                contract: reviewData?.salesInfo?.contract || '',
                thicknessNotify: reviewData?.salesInfo?.thicknessNotify || '',
                attachmentFile: reviewData?.attachmentFile || '',
                tsReviewReq: reviewData?.tsReviewReq || ''
            }));
        }
    }, [inquiriesDataDetail, userInfo, reviewData]);

    const [customerId, setCustomerId] = useState(formData.customerId);

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
    }, [id]);

    console.log("review: ", reviewData);
    console.log("inquiry: ", inquiriesDataDetail);

    const handleSubmit = async () => {
        if (formData.inquiryId) {
            try {
                // const offerSheetResponse = await postOffersheet(id);
                const reviewResponse = await postReviews(id, {
                    salesInfo: {
                        contract: formData.contract,
                        thicknessNotify: formData.thicknessNotify,
                    },
                    reviewText: formData.reviewText,
                    attachmentFile: formData.attachmentFile,
                    finalReviewText: formData.finalReviewText,
                    tsReviewReq: formData.tsReviewReq
                });

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
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} onSubmit={handleSubmit} />
            <BasicInfoForm formData={formData} />
            <InquiryHistoryForm onLineItemsChange={() => {}} />

            {/* Review Post & Get */}
            <SalesInfoForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <ReviewTextForm formData={formData} handleFormDataChange={handleFormDataChange} />
            <FinalReviewTextForm formData={formData} handleFormDataChange={handleFormDataChange} />


            <QualityReviewTextForm />
            <AdditionalRequestForm formData={formData} />

            <FileForm fileForm={"파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
            <FileFormItem fileForm={"첨부파일"} formData={formData} />
            <Offersheet />
        </div>
    )
}

export default SalesManagerInqItem;

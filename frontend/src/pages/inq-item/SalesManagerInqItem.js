import React, { useState, useEffect } from 'react';
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
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import ManagerBasicInfoForm
    from '../../components/organisms/inquiry-form/ManagerBasicInfoForm';

function SalesManagerInqItem() { // 고객사 Inquiry 조회
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
        try {
            const response = await getInquiryDetailByManagers(id);
            setInquiriesDataDetail(response.data);
            setFormData(prevData => ({
                ...prevData,
                customerId: response.data.customerId,
                lineItemResponseDTOs: response.data.lineItemResponseDTOs || []
            }));
            console.log("getInquiryDataDetail: ", response.data);
            console.log("getInquiryDataDetail - lineItemResponseDTOs: ", response.data.lineItemResponseDTOs);
        } catch (error) {
            console.error('Error fetching InquiryDetail:', error);
        }
    };

    console.log("getInquiryDataDetail - customerId: ", formData.customerId);

    const getUserInfo = async () => {
        try {
            const response = await getUserInfoByCustomers(formData.customerId); // 수정 필요
            setUserInfo(response.data.data);
            console.log("getUserInfo: ", response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching User Info:', error);
        }
    }

    const getReview = async () => {
        try {
            const response = await getReviews(id);
            setReviewData(response.data);
            console.log("review: ", response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching Reviews:', error);
        }
    }

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
    }, [id]);


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

                console.log('Review posted successfully:', reviewResponse);
            } catch (error) {
                console.error('Error posting offer sheet:', error);
            }
        }
    }

    // 폼 데이터 변경 핸들러
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
            <ManagerBasicInfoForm formData={inquiriesDataDetail} />
            <InquiryHistoryForm
                productType={formData.productType}
                lineItemData={formData.lineItemResponseDTOs}
                onLineItemsChange={(newLineItems) => setFormData(prev => ({ ...prev, lineItemResponseDTOs: newLineItems }))}
            />

            {/* Review Post & Get */}
            <SalesInfoForm formData={reviewData} handleFormDataChange={handleFormDataChange} />
            <ReviewTextForm formData={reviewData} handleFormDataChange={handleFormDataChange} />
            <FinalReviewTextForm formData={reviewData} handleFormDataChange={handleFormDataChange} />


            <QualityReviewTextForm />
            <AdditionalRequestForm formData={inquiriesDataDetail} />

            <FileForm fileForm={"파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
            <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
            <Offersheet />
        </div>
    )
}

export default SalesManagerInqItem;

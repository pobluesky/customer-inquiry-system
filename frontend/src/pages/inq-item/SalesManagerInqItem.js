import React, { useState, useEffect } from 'react';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    InquiryHistoryForm,
    FileFormItem,
    Offersheet,
} from '../../components/organisms/inquiry-form';
import {
    getInquiryDetailByManagers,
} from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getQualities, getReviews, postReviews } from '../../apis/api/review';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import ManagerBasicInfoForm
    from '../../components/organisms/inquiry-form/ManagerBasicInfoForm';
import { getOfferSheets } from '../../apis/api/offersheet';
import QualityReviewTextFormItem
    from '../../components/organisms/inquiry-form/quality-item/QualityReviewTextFormItem';
import QualityFileFormItem
    from '../../components/organisms/inquiry-form/quality-item/QualityFileFormItem';
import SalesInfoForm
    from '../../components/organisms/inquiry-form/review-form/SalesInfoForm';
import ReviewTextForm
    from '../../components/organisms/inquiry-form/review-form/ReviewTextForm';
import SalesInfoFormItem
    from '../../components/organisms/inquiry-form/review-item/SalesInfoFormItem';
import FinalReviewTextFormItem
    from '../../components/organisms/inquiry-form/review-item/FinalReviewTextFormItem';
import FinalReviewTextForm
    from '../../components/organisms/inquiry-form/review-form/FinalReviewTextForm';
import ReviewTextFormItem
    from '../../components/organisms/inquiry-form/review-item/ReviewTextFormItem';


function SalesManagerInqItem() { // 고객사 Inquiry 조회
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [qualityData, setQualityData] = useState(null);
    const [offerSheetData, setOfferSheetData] = useState(null);
    const [isReviewItem, setIsReviewItem] = useState(false);
    const [isQualityItem, setIsQualityItem] = useState(false);

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
        finalResult: '',
        finalResultDetails: '',
        standard: '',
        orderCategory: '',
        coatingMetalQuantity: '',
        coatingOilQuantity: '',
        thicknessTolerance: '',
        orderEdge: '',
        customerQReq: '',
        availableLab: '',
        qualityComments: '',
        qualityFiles: [],
        qualityFileName: '',
        qualityFilePath: '',
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

    const getQuality = async () => {
        try {
            const response = await getQualities(id);
            setQualityData(response.data);
            setIsQualityItem(true);
            console.log("quality: ", response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching Qualities:', error);
        }
    }

    const getOfferSheet = async () => {
        try {
            const response = await getOfferSheets(id);
            setOfferSheetData(response.data);
            console.log("offerSheet: ", response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching OfferSheet:', error);
        }
    }

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
        getQuality();
        getOfferSheet();
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
                lineItemResponseDTOs: inquiriesDataDetail.lineItemResponseDTOs || [],
                finalResult: qualityData?.qualityReviewInfo.finalResult || '',
                finalResultDetails: qualityData?.qualityReviewInfo.finalResultDetails || '',
                standard: qualityData?.qualityReviewInfo.standard || '',
                orderCategory: qualityData?.qualityReviewInfo.orderCategory || '',
                coatingMetalQuantity: qualityData?.qualityReviewInfo.coatingMetalQuantity || '',
                coatingOilQuantity: qualityData?.qualityReviewInfo.coatingOilQuantity || '',
                thicknessTolerance: qualityData?.qualityReviewInfo.thicknessTolerance || '',
                orderEdge: qualityData?.qualityReviewInfo.orderEdge || '',
                customerQReq: qualityData?.qualityReviewInfo.customerQReq || '',
                availableLab: qualityData?.qualityReviewInfo.availableLab || '',
                qualityComments: qualityData?.qualityComments || '',
                qualityFiles: qualityData?.qualityFiles || [],
                qualityFileName: qualityData?.qualityReviewInfo.fileName || '',
                qualityFilePath: qualityData?.qualityReviewInfo.filePath || '',
            }));
        }
    }, [inquiriesDataDetail, userInfo, reviewData, qualityData]);

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

    console.log(isQualityItem);

    return (
        <div>
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} role={'sales'} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} onSubmit={handleSubmit} />
            <ManagerBasicInfoForm formData={inquiriesDataDetail} />
            <InquiryHistoryForm
                productType={formData.productType}
                lineItemData={formData.lineItemResponseDTOs}
                onLineItemsChange={(newLineItems) => setFormData(prev => ({ ...prev, lineItemResponseDTOs: newLineItems }))}
            />
            <AdditionalRequestForm formData={inquiriesDataDetail} />

            {/* Review Post & Get */}
            { isReviewItem ? (
                <>
                    <SalesInfoFormItem formData={reviewData} handleFormDataChange={handleFormDataChange} />
                    <ReviewTextFormItem formData={reviewData} handleFormDataChange={handleFormDataChange} />
                    <FinalReviewTextFormItem formData={reviewData} handleFormDataChange={handleFormDataChange} />
                </>
            ) : (
                    <>
                        <SalesInfoForm formData={reviewData} handleFormDataChange={handleFormDataChange} />
                        <ReviewTextForm formData={reviewData} handleFormDataChange={handleFormDataChange} />
                        <FinalReviewTextForm formData={reviewData} handleFormDataChange={handleFormDataChange} />
                    </>
                )}

            { isQualityItem ? (
                <QualityReviewTextFormItem formData={qualityData} />
            ) : (
                ''
            )}

            { isQualityItem ? (
                <QualityFileFormItem fileForm={"품질검토 첨부파일"} formData={qualityData} />
            ) : (
                ''
            )}

            <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
            <Offersheet formData={offerSheetData} inquiryData={inquiriesDataDetail} />
        </div>
    )
}

export default SalesManagerInqItem;

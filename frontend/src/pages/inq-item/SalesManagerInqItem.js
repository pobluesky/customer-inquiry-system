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
import { getQualities, getReviews, getOfferSheets, postReview, postOfferSheet } from '../../apis/api/review';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import ManagerBasicInfoForm
    from '../../components/organisms/inquiry-form/ManagerBasicInfoForm';
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
    const [isOfferSheetItem, setIsOfferSheetItem] = useState(false);

    const [formData, setFormData] = useState({
        // inquiry
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

        // review
        contract: '',
        thicknessNotify: '',
        reviewText: '',
        finalReviewText: '',
        lineItemResponseDTOs: [],

        // quality
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

        // offerSheet
        priceTerms: '',
        paymentTerms: '',
        shipment: '',
        validity: '',
        destination: '',
        remark: '',

        // offerSheet receipts
        receipts: []
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

    const getUserInfo = async () => {
        try {
            const response = await getUserInfoByCustomers(id); // 수정 필요
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
            setIsReviewItem(true);
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
            setIsOfferSheetItem(true);
            setFormData(prevData => ({
                ...prevData,
                receipts: response.data.receipts || []
            }));
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
                contract: reviewData?.salesInfo.contract || '',
                thicknessNotify: qualityData?.qualityReviewInfo.thicknessNotify || '',
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
                priceTerms: offerSheetData?.priceTerms || '',
                paymentTerms: offerSheetData?.paymentTerms || '',
                shipment: offerSheetData?.shipment || '',
                validity: offerSheetData?.validity || '',
                destination: offerSheetData?.destination || '',
                receipts: offerSheetData?.receipts || []
            }));
        }
    }, [inquiriesDataDetail, userInfo]);

    const handleReviewSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (id) {
            try {
                const reviewResponse = await postReview(id, {
                    salesInfo: {
                        contract: formData.contract,
                        thicknessNotify: formData.thicknessNotify,
                    },
                    reviewText: formData.reviewText,
                    finalReviewText: formData.finalReviewText,
                });

                console.log('Review posted successfully:', reviewResponse);
            } catch (error) {
                console.error('Error posting review:', error);
            }
        }
    }

    const handleFinalSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (id) {
            try {
                const offerSheetResponse = await postOfferSheet(id, {
                    ...formData,
                    receipts: formData.receipts,
                });

                console.log('offerSheet posted successfully:', offerSheetResponse);
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
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} role={'sales'} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} onReviewSubmit={handleReviewSubmit} onFinalSubmit={handleFinalSubmit} />
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
                    <SalesInfoFormItem formData={reviewData} />
                    <ReviewTextFormItem formData={reviewData} />
                    <FinalReviewTextFormItem formData={reviewData} />
                </>
            ) : (
                    <>
                        <SalesInfoForm formData={formData} handleFormDataChange={handleFormDataChange} />
                        <ReviewTextForm formData={formData} handleFormDataChange={handleFormDataChange} />
                        <FinalReviewTextForm formData={formData} handleFormDataChange={handleFormDataChange} />
                    </>
                )}

            { isQualityItem ? (
                <>
                    <QualityReviewTextFormItem formData={qualityData} />
                    <QualityFileFormItem fileForm={"품질검토 첨부파일"} formData={qualityData} />
                </>
                ) : (
                ''
            )}

            { isOfferSheetItem ? (
                <Offersheet formData={offerSheetData}
                            inquiryData={inquiriesDataDetail}
                            lineItemData={formData.receipts}
                />
            ) : (
                <Offersheet formData={formData}
                            inquiryData={inquiriesDataDetail}
                            lineItemData={formData.receipts}
                            onLineItemsChange={(newLineItems) => setFormData(
                                prev => ({
                                    ...prev,
                                    receipts: newLineItems,
                                }))}
                />
            )}

            <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
        </div>
    )
}

export default SalesManagerInqItem;

import React, { useState, useEffect } from 'react';
import RequestBar from './../../components/molecules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    InquiryHistoryFormItem,
    FileFormItem,
    Offersheet,
} from '../../components/organisms/inquiry-form';
import {
    getInquiryDetailByManagers, putProgress,
} from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import {
    getQualities,
    getReviews,
    getOfferSheets,
    postReview,
    postOfferSheet,
    putReview,
} from '../../apis/api/review';
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
import { InqTableContainer } from '../../assets/css/Inquiry.css';
import { postNotificationByCustomers } from '../../apis/api/notification';
import { useAuth } from '../../hooks/useAuth';

function SalesManagerInqItem() { // 판매담당자 Inquiry 조회 페이지
    const { id } = useParams();
    const { userId, userName } = useAuth();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [qualityData, setQualityData] = useState(null);
    const [offerSheetData, setOfferSheetData] = useState(null);
    const [isReviewItem, setIsReviewItem] = useState(false);
    const [isQualityItem, setIsQualityItem] = useState(false);
    const [isOfferSheetItem, setIsOfferSheetItem] = useState(false);
    const [isFinalReview, setIsFinalReview] = useState(false);

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
        lineItemResponseDTOs: [],

        // review
        contract: '',
        thicknessNotify: '',
        reviewText: '',
        finalReviewText: '',

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
        message: '',
        priceTerms: '',
        paymentTerms: '',
        shipment: '',
        validity: '',
        destination: '',
        remark: '',
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
        } catch (error) {
            console.log('Error fetching InquiryDetail:', error);
        }
    };

    const getUserInfo = async () => {
        try {
            const response = await getUserInfoByCustomers(id); // 수정 필요
            setUserInfo(response.data.data);
            return response.data.data;
        } catch (error) {
            console.log('Error fetching User Info:', error);
        }
    }

    const getReview = async () => {
        try {
            const response = await getReviews(id);
            setReviewData(response.data);
            setIsReviewItem(true);
            return response.data;
        } catch (error) {
            console.log('Error fetching Reviews:', error);
        }
    }

    const getQuality = async () => {
        try {
            const response = await getQualities(id);
            setQualityData(response.data);
            setIsQualityItem(true);
            return response.data;
        } catch (error) {
            console.log('Error fetching Qualities:', error);
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
            return response.data;
        } catch (error) {
            console.log('Error fetching OfferSheet:', error);
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
                customerCode: userInfo?.data?.customerCode || '',
                customerId: inquiriesDataDetail.customerId || null,
                customerName: inquiriesDataDetail.customerName || '',
                customerRequestDate: inquiriesDataDetail.customerRequestDate || '',
                files: inquiriesDataDetail.files || [],
                industry: inquiriesDataDetail.industry || '',
                inquiryId: inquiriesDataDetail.inquiryId || null,
                inquiryType: inquiriesDataDetail.inquiryType || '',
                name: inquiriesDataDetail.name || '',
                email: userInfo?.data?.email || '',
                phone: userInfo?.data?.phone || '',
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
                message: offerSheetData?.message || '',
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
                });
                const notificationResponse = await postNotificationByCustomers(formData.customerId, {
                    notificationContents:
                        `${inquiriesDataDetail.name}님의 문의 1차검토가 완료되었습니다.`,
                })
                console.log('Review posted successfully:', reviewResponse);
                console.log('Notification posted successfully:', notificationResponse);
            } catch (error) {
                console.log('Error posting review:', error);
            }
        }
    }

    const handleQualitySubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (id) {
            try {
                const customerNotificationResponse = await postNotificationByCustomers(formData.customerId, {
                    notificationContents:
                        `${inquiriesDataDetail.name}님의 문의는 현재 품질검토진행 중입니다.`,
                })
                // const managerNotificationResponse = await postNotificationByManagers(formData.managerId, {
                //     notificationContents:
                //         `Inquiry ${id}번 문의의 품질검토요청이 접수되었으니, 확인 바랍니다.`,
                // })
                console.log('Notification posted successfully:', customerNotificationResponse);
                // console.log('ManagerNotification posted successfully:', managerNotificationResponse);
            } catch (error) {
                console.log('Error posting notification:', error);
            }
        }
    }

    const handleFinalSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (id) {
            try {
                const reviewResponse = await putReview(id, {
                    finalReviewText: formData.finalReviewText,
                })
                setIsFinalReview(true);
                const offerSheetResponse = await postOfferSheet(id, {
                    ...formData,
                    receipts: formData.receipts,
                });
                const notificationResponse = await postNotificationByCustomers(formData.customerId, {
                    notificationContents:
                        `${inquiriesDataDetail.name}님의 문의 최종 검토가 완료되었습니다. 최종검토내용과 OfferSheet를 확인해 주세요.`,
                })
                console.log('Final Review updated successfully:', reviewResponse);
                console.log('offerSheet posted successfully:', offerSheetResponse);
                console.log('Notification posted successfully:', notificationResponse);
            } catch (error) {
                console.log('Error updating review OR posting offerSheet:', error);
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
        <div className={InqTableContainer}>
            <ManagerInqPath mediumCategory={'Inquiry 조회'} smallCategory={id}
                            role={'sales'} />
            <RequestBar
                        requestBarTitle={'Inquiry 상세조회 및 영업검토'}
                        onReviewSubmit={handleReviewSubmit}
                        onQualitySubmit={handleQualitySubmit}
                        onFinalSubmit={handleFinalSubmit} />
            <ManagerBasicInfoForm formData={inquiriesDataDetail} />
            <InquiryHistoryFormItem
                productType={inquiriesDataDetail?.productType}
                lineItemData={formData.lineItemResponseDTOs}
            />
            <AdditionalRequestForm formData={inquiriesDataDetail} />

            {isReviewItem ? (
                <>
                    <SalesInfoFormItem formData={reviewData} />
                    <ReviewTextFormItem formData={reviewData} />
                </>
            ) : (
                <>
                    <SalesInfoForm formData={formData}
                                   handleFormDataChange={handleFormDataChange} />
                    <ReviewTextForm formData={formData}
                                    handleFormDataChange={handleFormDataChange} />
                </>
            )}

            {isFinalReview ? (
                <FinalReviewTextFormItem formData={reviewData} />
            ) : (
                <FinalReviewTextForm formData={formData}
                                     handleFormDataChange={handleFormDataChange} />
            )}

            {isQualityItem ? (
                <>
                    <QualityReviewTextFormItem formData={qualityData} />
                    <QualityFileFormItem fileForm={'품질검토 첨부파일'}
                                         formData={qualityData} />
                </>
            ) : (
                ''
            )}

            {isOfferSheetItem ? (
                <Offersheet formData={offerSheetData}
                            inquiryData={inquiriesDataDetail}
                            lineItemData={offerSheetData.receipts}
                            isOfferSheetItem={isOfferSheetItem}
                />
            ) : (
                <Offersheet formData={formData}
                            inquiryData={inquiriesDataDetail}
                            lineItemData={formData.receipts}
                            handleFormDataChange={handleFormDataChange}
                            onLineItemsChange={(newLineItems) => setFormData(
                                prev => ({
                                    ...prev,
                                    receipts: newLineItems,
                                }))}
                />
            )}

            <FileFormItem fileForm={'첨부파일'} formData={inquiriesDataDetail} />
        </div>
    )
}

export default SalesManagerInqItem;

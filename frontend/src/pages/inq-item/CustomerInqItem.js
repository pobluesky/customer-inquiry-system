import React, { useState, useEffect } from 'react';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/molecules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    BasicInfoForm,
    FileFormItem,
    Offersheet,
    InquiryHistoryFormItem, InquiryNewForm, InquiryHistoryForm, FileForm,
} from '../../components/organisms/inquiry-form';
import { useAuth } from '../../hooks/useAuth';
import { getInquiryDetail, putInquiry } from '../../apis/api/inquiry';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import { getOfferSheets, getReviews } from '../../apis/api/review';
import ReviewTextFormItem
    from '../../components/organisms/inquiry-form/review-item/ReviewTextFormItem';
import FinalReviewTextFormItem
    from '../../components/organisms/inquiry-form/review-item/FinalReviewTextFormItem';
import { InqTableContainer } from '../../assets/css/Inquiry.css';
import { postNotificationByCustomers } from '../../apis/api/notification';
import { InquiryUpdateAlert } from '../../utils/actions';
import { useForm } from 'react-hook-form';
import FileUpdateForm
    from '../../components/organisms/inquiry-form/FileUpdateForm';

function CustomerInqItem() { // 고객사 Inquiry 조회 페이지
    const { userId, role } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [reviewData, setReviewData] = useState(null);
    const [offerSheetData, setOfferSheetData] = useState(null);

    const [isReviewItem, setIsReviewItem] = useState(false);
    const [isOfferSheetItem, setIsOfferSheetItem] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

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
        reviewText: '',
        finalReviewText: '',

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
        if (!userId) {
            return;
        }
        try {
            const response = await getInquiryDetail(userId, id);
            setInquiriesDataDetail(response.data);
            console.log("getInquiryDataDetail : ", response.data)
            setFormData(prevData => ({
                ...prevData,
                ...response.data,
                lineItemRequestDTOs: response.data.lineItemResponseDTOs || [],
                files: response.data.files || [],
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
            setIsReviewItem(true);
            return response.data;
        } catch (error) {
            console.log('Error fetching Reviews:', error);
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

    const getProgress = async () => {
        try {
            const response = await getInquiryDetail(userId, id);
            if (response.data.progress === 'SUBMIT' && role === 'CUSTOMER') {
                setIsUpdate(true);
            } else {
                setIsUpdate(false);
            }
        } catch (error) {
            console.log('Error fetching Progress:', error);
        }
    }

    const handleFormDataChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleUpdate = async (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        const updatedFormData = {
            ...formData,
            files: formData.files || [],
            lineItemResponseDTOs: formData.lineItemResponseDTOs || []
        };
        console.log("updatedFormData: ", updatedFormData);
        try {
            const inquiryUpdateResponse = await putInquiry(id, updatedFormData);
            const notificationResponse = await postNotificationByCustomers(userId, {
                notificationContents: `${formData.name}님의 Inquiry가 수정되었습니다.`,
            })
            console.log('Inquiry posted successfully:', inquiryUpdateResponse);
            console.log('Notification posted successfully:', notificationResponse);

            InquiryUpdateAlert();
            setTimeout(() => {
                navigate(`/inq-list/${role}`);
            }, '2000');
        } catch (error) {
            console.log('Error updating Inquiry:', error);
        }
    }

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getReview();
        getOfferSheet();
        getProgress();
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

    useEffect(() => {
        console.log('inquiriesDataDetail:', inquiriesDataDetail);
        console.log('formData:', formData);
    }, [inquiriesDataDetail, formData]);

    console.log(inquiriesDataDetail?.files);

    return (
        <div className={InqTableContainer}>
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'}
                     smallCategory={id} />
            <RequestBar requestBarTitle={'Inquiry 조회'} role={'customer'}
                        onUpdate={handleSubmit(handleUpdate)} />

            {isUpdate ? (
                <>{/* 신규작성 및 수정 때 */}
                    <InquiryNewForm
                        register={register}
                        errors={errors}
                        formData={formData}
                        handleFormDataChange={handleFormDataChange}
                    />
                    <InquiryHistoryForm
                        productType={formData.productType}
                        lineItemData={formData.lineItemResponseDTOs}
                        onLineItemsChange={(lineItems) => handleFormDataChange(
                            'lineItemRequestDTOs', lineItems)}
                    />
                    <AdditionalRequestForm formData={formData}
                                           handleFormDataChange={handleFormDataChange} />
                    <FileUpdateForm fileForm={"파일수정"} formData={formData} fileData={inquiriesDataDetail}
                              handleFormDataChange={handleFormDataChange} />
                </>
            ) : (
                <>{/* 단순 조회할 때 */}
                    <BasicInfoForm formData={formData} />
                    <InquiryHistoryFormItem
                        productType={inquiriesDataDetail?.productType}
                        lineItemData={formData.lineItemResponseDTOs}
                    />
                    <AdditionalRequestForm formData={formData} readOnly={true} />
                    <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
                </>
            )}

            {isReviewItem ? (
                <>
                    <ReviewTextFormItem formData={reviewData} />
                    <FinalReviewTextFormItem formData={reviewData} />
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
                ''
            )}
        </div>
    )
}

export default CustomerInqItem;

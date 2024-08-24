import React, { useState, useEffect } from 'react';
import RequestBar from './../../components/mocules/RequestBar';
import '../../assets/css/Form.css';
import {
    AdditionalRequestForm,
    InquiryHistoryForm,
    FileFormItem,
} from '../../components/organisms/inquiry-form';
import {
    getInquiryDetailByManagers,
} from '../../apis/api/inquiry';
import { useParams } from 'react-router-dom';
import { getUserInfoByCustomers } from '../../apis/api/auth';
import {
    getQualities,
    postQuality,
} from '../../apis/api/review';
import ManagerInqPath from '../../components/atoms/ManagerInqPath';
import ManagerBasicInfoForm
    from '../../components/organisms/inquiry-form/ManagerBasicInfoForm';
import QualityReviewTextFormItem
    from '../../components/organisms/inquiry-form/quality-item/QualityReviewTextFormItem';
import QualityReviewTextForm
    from '../../components/organisms/inquiry-form/quality-form/QualityReviewTextForm';
import QualityFileForm
    from '../../components/organisms/inquiry-form/quality-form/QualityFileForm';
import QualityFileFormItem
    from '../../components/organisms/inquiry-form/quality-item/QualityFileFormItem';

function QualityManagerInqItem() { // 품질담당자 Inquiry 조회 페이지
    const { id } = useParams();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [qualityData, setQualityData] = useState(null);
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
        fileName: '',
        filePath: '',
        name: '',
        email: '',
        phone: '',
        productType: '',
        progress: '',
        salesPerson: '',
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
        } catch (error) {
            console.log('Error fetching InquiryDetail:', error);
        }
    };

    const getUserInfo = async () => {
        try {
            const response = await getUserInfoByCustomers(formData.customerId); // 수정 필요
            setUserInfo(response.data.data);
            return response.data.data;
        } catch (error) {
            console.log('Error fetching User Info:', error);
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

    useEffect(() => {
        getInquiryDataDetail();
        getUserInfo();
        getQuality();
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
                fileName: inquiriesDataDetail.fileName || '',
                filePath: inquiriesDataDetail.filePath || '',
                name: inquiriesDataDetail.name || '',
                email: userInfo.data.email || '',
                phone: userInfo.data.phone || '',
                productType: inquiriesDataDetail.productType || '',
                progress: inquiriesDataDetail.progress || '',
                salesPerson: inquiriesDataDetail.salesPerson || '',
                lineItemResponseDTOs: inquiriesDataDetail.lineItemResponseDTOs || [],
                finalResult: qualityData.qualityReviewInfo.finalResult || '',
                finalResultDetails: qualityData.qualityReviewInfo.finalResultDetails || '',
                standard: qualityData.qualityReviewInfo.standard || '',
                orderCategory: qualityData.qualityReviewInfo.orderCategory || '',
                coatingMetalQuantity: qualityData.qualityReviewInfo.coatingMetalQuantity || '',
                coatingOilQuantity: qualityData.qualityReviewInfo.coatingOilQuantity || '',
                thicknessTolerance: qualityData.qualityReviewInfo.thicknessTolerance || '',
                orderEdge: qualityData.qualityReviewInfo.orderEdge || '',
                customerQReq: qualityData.qualityReviewInfo.customerQReq || '',
                availableLab: qualityData.qualityReviewInfo.availableLab || '',
                qualityComments: qualityData.qualityComments || '',
                qualityFiles: qualityData.qualityFiles || [],
                qualityFileName: qualityData.qualityReviewInfo.fileName || '',
                qualityFilePath: qualityData.qualityReviewInfo.filePath || '',
            }));
        }
    }, [inquiriesDataDetail, userInfo]);

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (id) {
            try {
                const qualityResponse = await postQuality(id, {
                    ...formData,
                    qualityReviewInfo: {
                        finalResult: formData.finalResult,
                        finalResultDetails: formData.finalResultDetails,
                        standard: formData.standard,
                        orderCategory: formData.orderCategory,
                        coatingMetalQuantity: formData.coatingMetalQuantity,
                        coatingOilQuantity: formData.coatingOilQuantity,
                        thicknessTolerance: formData.thicknessTolerance,
                        orderEdge: formData.orderEdge,
                        customerQReq: formData.customerQReq,
                        availableLab: formData.availableLab,
                    },
                    qualityComments: formData.qualityComments,
                });
                console.log('Quality posted successfully:', qualityResponse);
            } catch (error) {
                console.log('Error posting quality:', error);
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
            <ManagerInqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={id} role={'quality'} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 품질검토"} onSubmit={handleSubmit} />
            <ManagerBasicInfoForm formData={inquiriesDataDetail} />
            <InquiryHistoryForm
                productType={formData.productType}
                lineItemData={formData.lineItemResponseDTOs}
                onLineItemsChange={(newLineItems) => setFormData(prev => ({ ...prev, lineItemResponseDTOs: newLineItems }))}
            />
            <AdditionalRequestForm formData={inquiriesDataDetail} />

            { isQualityItem ? (
                <QualityReviewTextFormItem formData={qualityData} />
            ) : (
                <QualityReviewTextForm formData={formData} handleFormDataChange={handleFormDataChange} />
            )}

            { isQualityItem ? (
                <QualityFileFormItem fileForm={"품질검토 첨부파일"} formData={qualityData} />
            ) : (
                <QualityFileForm fileForm={"품질검토 파일첨부"} formData={formData} handleFormDataChange={handleFormDataChange} />
            )}

            <FileFormItem fileForm={"첨부파일"} formData={inquiriesDataDetail} />
        </div>
    )
}

export default QualityManagerInqItem;

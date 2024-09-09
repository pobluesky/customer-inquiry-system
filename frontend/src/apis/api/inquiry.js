import axiosInstance from '../utils/axiosInstance';
import {
    createFormInquiryData, createFormOCRData, processHistoryData,
    processInquiries, processInquiryData,
} from '../utils/inquiryUtils';

// 고객사 inquiry list 가져오기 (summary)
export const getInquiry = async (userId, page = 0) => {
    try {
        const response = await axiosInstance.get(
            `/customers/inquiries/${userId}/all?page=${page}`,
        );
        console.log(response.data);
        const { inquiryInfo, totalPages, totalElements } = response.data.data;
        return {
            inquiryInfo: processInquiries(inquiryInfo),
            totalPages,
            totalElements,
        };
    } catch (error) {
        throw error;
    }
};

// 고객사 inquiry list 가져오기 (all)
export const getAllInquiries = async (userId) => {
    try {
        const response = await axiosInstance.get(`/customers/inquiries/${userId}`);
        console.log(response.data);

        const inquiryInfo = response?.data?.data;

        if (!inquiryInfo) {
            console.log('inquiryInfo is undefined or null');
            return { inquiryInfo: [] };
        }
        return {
            inquiryInfo: processInquiries(inquiryInfo)
        };

    } catch (error) {
        throw error;
    }
};

// 고객사 inquiry 상세 조회 가져오기
export const getInquiryDetail = async (userId, inquiryId) => {
    try {
        const response = await axiosInstance.get(
            `/customers/inquiries/${userId}/${inquiryId}`,
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 고객사 Inquiry 등록
export const postInquiry = async (userId, inquiryData) => {
    try {
        const formData = createFormInquiryData(inquiryData);

        const response = await axiosInstance.post(
            `/customers/inquiries/${userId}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );
        console.log('postInquiryResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error posting inquiry:', error);
        throw error;
    }
};

// 고객사 inquiry 수정
export const putInquiry = async (inquiryId, inquiryData) => {
    try {
        const formData = createFormInquiryData(inquiryData);

        const response = await axiosInstance.put(
            `/customers/inquiries/${inquiryId}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );
        console.log('putInquiryResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error putting inquiry:', error);
        throw error;
    }
};

// 담당자 inquiry list 가져오기 (summary)
export const getInquiryByManagers = async (page = 0) => {
    try {
        const response = await axiosInstance.get(
            `/managers/inquiries/all?page=${page}`,
        );
        console.log(response.data);
        const { inquiryInfo, totalPages, totalElements } = response.data.data;
        return {
            inquiryInfo: processInquiries(inquiryInfo),
            totalPages,
            totalElements,
        };
    } catch (error) {
        throw error;
    }
};

// 담당자 inquiry list 가져오기 (all)
export const getAllInquiriesByManagers = async () => {
    try {
        const response = await axiosInstance.get(
            `/managers/inquiries`,
        );
        console.log(response.data);

        const inquiryInfo = response?.data?.data;

        if (!inquiryInfo) {
            console.log('inquiryInfo is undefined or null');
            return { inquiryInfo: [] };
        }
        return {
            inquiryInfo: processInquiries(inquiryInfo)
        };

    } catch (error) {
        throw error;
    }
};

// 담당자 inquiry 상세 조회
export const getInquiryDetailByManagers = async (inquiryId) => {
    try {
        const response = await axiosInstance.get(
            `/managers/inquiries/${inquiryId}`,
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 담당자 할당
export const putManagerAllocate = async (inquiryId) => {
    try {
        const response = await axiosInstance.put(
            `/managers/inquiries/${inquiryId}/allocate`,
        );
        console.log('putManagerAllocateResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error putting manager allocate:', error);
        throw error;
    }
}

// Progress Update
export const putProgress = async (inquiryId, progress) => {
    try {
        const response = await axiosInstance.put(
            `/managers/inquiries/${inquiryId}/progress/${progress}`,
        );
        console.log('putProgressUpdateResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error putting progress update:', error);
        throw error;
    }
}

// 제품 유형에 따른 고객 전체 Inquiry 목록 조회
export const getInquiriesByProductType = async (userId, productType) => {
    try {
        const response = await axiosInstance.get(
            `/customers/inquiries/${userId}/${productType}/all`,
        );
        console.log(response.data);
        return processHistoryData(response.data.data);
    } catch (error) {
        throw error;
    }
}

// 제품 유형에 따른 고객 즐겨찾기 Inquiry 목록 조회
export const getFavoriteInquiriesByProductType = async (userId, productType) => {
    try {
        const response = await axiosInstance.get(
            `/customers/inquiries/${userId}/${productType}/favorite`,
        );
        console.log(response.data);
        return  processHistoryData(response.data.data);
    } catch (error) {
        throw error;
    }
}

// 특정 Inquiry 즐겨찾기 설정
export const putFavoriteInquiry = async (inquiryId) => {
    try {
        const response = await axiosInstance.put(
            `/customers/inquiries/${inquiryId}/favorite`,
        );
        console.log('putFavoriteInquiryResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error putting favorite inquiry:', error);
        throw error;
    }
}

// inquiry 라인아이템 optimizer (OCR API)
export const postOCR = async (userId, productType) => {
    try {
        const formData = createFormOCRData(productType);

        const response = await axiosInstance.post(
            `/customers/inquiries/${userId}/optimized`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );

        processInquiryData(formData);
        console.log('postOCR: ', response);
        return response.data;
    } catch (error) {
        console.log('Error posting inquiry:', error);
        throw error;
    }
};

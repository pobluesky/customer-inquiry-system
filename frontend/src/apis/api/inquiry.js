import axiosInstance from '../utils/axiosInstance';
import {
    createFormInquiryData,
    processInquiries,
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
        console.log('postInquiryFormData: ', formData);

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
        console.log('putInquiryFormData: ', formData);

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

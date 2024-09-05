import axiosInstance from '../utils/axiosInstance';
import {
    createFormInquiryData,
    processInquiries,
} from '../utils/inquiryUtils';

// 고객사 inquiry list 가져오기 (summary)
export const getInquiry = async (userId, page = 0) => {
    try {
        const response = await axiosInstance.get(
            `/inquiries/customers/inquiries/${userId}/all?page=${page}`,
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
        const response = await axiosInstance.get(`/inquiries/customers/inquiries/${userId}`);
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
            `/inquiries/customers/inquiries/${userId}/${inquiryId}`,
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
            `/inquiries/customers/inquiries/${userId}`,
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
            `/inquiries/customers/inquiries/${inquiryId}`,
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
            `/inquiries/managers/inquiries/all?page=${page}`,
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
            `/inquiries/managers/inquiries`,
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
            `/inquiries/managers/inquiries/${inquiryId}`,
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
            `/inquiries/managers/inquiries/${inquiryId}/allocate`,
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
            `/inquiries/managers/inquiries/${inquiryId}/progress/${progress}`,
        );
        console.log('putProgressUpdateResponse: ', response);
        return response.data;
    } catch (error) {
        console.log('Error putting progress update:', error);
        throw error;
    }
}
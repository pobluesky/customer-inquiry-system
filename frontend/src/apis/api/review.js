import axiosInstance from '../utils/axiosInstance';

// 1차 검토(review) & 품질 검토(quality)

// 1차 검토 조회
export const getReviews = async (inquiryId) => {
    try {
        const response = await axiosInstance.get(`/reviews/${inquiryId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Reviews:', error);
        throw error;
    }
};

// 1차 검토 등록
export const postReviews = async (inquiryId, reviewData) => {
    try {
        const response = await axiosInstance.post(`/reviews/${inquiryId}`, reviewData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating Review:', error);
        throw error;
    }
};

// 품질 검토 조회
export const getQualities = async (inquiryId) => {
    try {
        const response = await axiosInstance.get(`/qualities/${inquiryId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching Qualities:', error);
        throw error;
    }
};

// 품질 검토 등록
export const postQualities = async (inquiryId, qualityData) => {
    try {
        const response = await axiosInstance.post(`/qualities/${inquiryId}`, qualityData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating Quality:', error);
        throw error;
    }
};
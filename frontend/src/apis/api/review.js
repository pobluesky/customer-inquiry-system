import axiosInstance from '../utils/axiosInstance';

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
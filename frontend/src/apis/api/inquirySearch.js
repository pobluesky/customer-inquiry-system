import axiosInstance from '../utils/axiosInstance';
import { processInquiries } from '../utils/inquiryUtils';

// 고객사 inquiry 조회 파라미터 별 조회
export const getCustomerInquiriesByParameter = async (userId, queryParams) => {
    try {
        const filteredQueryParams = Object.fromEntries(
            Object.entries(queryParams).filter(([_, value]) => value !== "")
        );
        const query = new URLSearchParams(filteredQueryParams).toString();
        const response = await axiosInstance.get(
            `/customers/inquiries/${userId}?${query}`
        );
        console.log("getCustomerInquiriesByParameter: ", response.data.data);
        return processInquiries(response.data.data);
    } catch (error) {
        throw error;
    }
};

// 담당자용 inquiry 파라미터 별 조회
export const getManagerInquiriesByParameter = async (queryParams) => {
    try {
        const filteredQueryParams = Object.fromEntries(
            Object.entries(queryParams).filter(([_, value]) => value !== "")
        );
        const query = new URLSearchParams(filteredQueryParams).toString();
        const response = await axiosInstance.get(
            `/managers/inquiries?${query}`
        );
        console.log("getManagerInquiriesByParameter: ", response.data.data);
        return processInquiries(response.data.data);
    } catch (error) {
        throw error;
    }
};
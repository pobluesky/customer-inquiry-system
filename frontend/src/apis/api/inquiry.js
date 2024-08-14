import axiosInstance from "../utils/axiosInstance";
import { getRoleFromCookie } from '../utils/tokenUtils';
import {getCookie} from "../utils/cookies";

export const getInquiry = async (userId) => {
  try {
    console.log(getCookie('accessToken'));
    const userRole = getRoleFromCookie();

    if (userRole !== 'USER') { // 백엔드 수정 후 USER -> CUSTOMER, QUALITY, SALES 변경 필요
      throw new Error('Access denied: [Role] 오류');
    }

    const response = await axiosInstance.get(`/customers/inquiries/${userId}`);
    // console.log("[getInquiry]: ", response.data);
    return response.data;

  } catch (error) {
    console.error('Error fetching Inquiry:', error);
    throw error;
  }
};

import axiosInstance from '../utils/axios';

// 고객사 전체 알림 조회
export const fetchCustomerNotifications = async () => {
  try {
    const response = await axiosInstance.get('/notifications/customers');
    return response.data.data;
  } catch (error) {
    console.error('[Customer Notifications]: ', error);
    throw error;
  }
};
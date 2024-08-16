import axiosInstance from '../utils/axiosInstance';
import {format} from "date-fns";

// 고객사 ID 별 알림 조회
export const getNotificationByCustomers = async (userId) => {
  try {
    const response = await axiosInstance.get(`/notifications/customers/${userId}`);

    const notification = response.data.data.map(notification => ({
      id: notification.notificationId,
      contents: notification.notificationContents,
      isRead: notification.isRead,
      userId: notification.userId,
      date: format(new Date(notification.createdDate), 'yyyy년 MM월 dd일 HH시 mm분')
    }));

    console.log(notification);
    return notification;

  } catch (error) {
    console.error('[Customer Notifications]: ', error);
    throw error;
  }
};

export const updateNotificationIsReadByCustomer = async (notificaitionId) => {
  try {
    await axiosInstance.put(`/notifications/customers/${notificaitionId}`, {
      isRead: true,
    });
    console.log('Notification is read successfully');

  } catch (error) {
    console.error('[Update Notification Read]: ', error);
    throw error;
  }
}
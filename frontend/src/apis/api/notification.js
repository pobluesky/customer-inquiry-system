import axiosInstance from '../utils/axiosInstance';
import { format } from 'date-fns';

// 알림 데이터 가공
const processNotifications = (data) => {
  return data.map(notification => ({
    id: notification.notificationId,
    contents: notification.notificationContents,
    isRead: notification.isRead,
    userId: notification.userId,
    date: format(new Date(notification.createdDate), 'yyyy년 MM월 dd일 HH시 mm분')
  }));
};

// 공통 알림 조회 함수
const fetchNotifications = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return processNotifications(response.data.data);
  } catch (error) {
    console.log(`[Fetch Notifications Error]: ${error}`);
    throw error;
  }
};

// 공통 알림 업데이트 함수
const updateNotificationIsRead = async (url, notificationId) => {
  try {
    await axiosInstance.put(`${url}/${notificationId}`, {
      isRead: true,
    });
  } catch (error) {
    console.log(`[Update Notification Read Error]: ${error}`);
    throw error;
  }
};

// 고객사 ID 별 알림 조회
export const getNotificationByCustomers = async (userId) => {
  return fetchNotifications(`/notifications/customers/${userId}`);
};

// 고객사 읽은 알림 조회
export const getReadNotificationByCustomers = async (userId) => {
  return fetchNotifications(`/notifications/customers/read/${userId}`);
};

// 고객사 알림 안 읽음 -> 읽음
export const updateNotificationIsReadByCustomer = async (notificationId) => {
  return updateNotificationIsRead(`/notifications/customers`, notificationId);
};

// 담당자 ID 별 알림 조회
export const getNotificationByManagers = async (userId) => {
  return fetchNotifications(`/notifications/managers/${userId}`);
};

// 담당자 읽은 알림 조회
export const getReadNotificationByManagers = async (userId) => {
  return fetchNotifications(`/notifications/managers/read/${userId}`);
};

// 담당자 알림 안 읽음 -> 읽음
export const updateNotificationIsReadByManager = async (notificationId) => {
  return updateNotificationIsRead(`/notifications/managers`, notificationId);
};

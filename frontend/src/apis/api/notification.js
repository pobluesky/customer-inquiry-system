// import axiosInstance from '../utils/axiosInstance';
// import {format} from "date-fns";
//
// // 고객사 ID 별 알림 조회
// export const fetchCustomerNotifications = async (customerId) => {
//   try {
//     const response = await axiosInstance.get(`/notifications/customers/${customerId}`);
//
//     const notification = response.data.data.map(notification => ({
//       id: notification.notificationId,
//       contents: notification.notificationContents,
//       isRead: notification.isRead,
//       customerId: notification.customerId,
//       date: format(new Date(notification.createdDate), 'yyyy-MM-dd HH시 mm분 ss초')
//     }));
//
//     return notification;
//
//   } catch (error) {
//     console.error('[Customer Notifications]: ', error);
//     throw error;
//   }
// };
import { fetchCustomerNotifications } from '../api/notification';
import { format } from 'date-fns';

// 고객사 전체 알림 조회
export const getCustomerNotifications = async () => {
  const data = await fetchCustomerNotifications();

  // 데이터를 정제 및 가공
  return data.map(notification => ({
    id: notification.notificationId,
    contents: notification.notificationContents,
    isRead: notification.isRead,
    customerId: notification.customerId,
    date: format(new Date(notification.createdDate), 'yyyy-MM-dd HH시 mm분 ss초')
  }));
};
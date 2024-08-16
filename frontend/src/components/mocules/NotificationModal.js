import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bell from '../../assets/css/icons/bell.svg';
import circle from '../../assets/css/icons/circle.svg';
import readBell from '../../assets/css/icons/readBell.svg';
import readCircle from '../../assets/css/icons/readCircle.svg';

import {
    getNotificationByCustomers, getNotificationByManagers,
    getReadNotificationByCustomers, getReadNotificationByManagers,
    updateNotificationIsReadByCustomer, updateNotificationIsReadByManager,
} from '../../apis/api/notification';
import { useAuth } from '../../hooks/useAuth';

const NotificationModal = ({ onClose }) => {
    const { role, userId } = useAuth();

    const [activeTab, setActiveTab] = useState('new');
    const [currentUserId, setCurrentUserId] = useState(userId);
    const [newNotificationList, setNewNotificationList] = useState([]);
    const [readNotificationList, setReadNotificationList] = useState([]);

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const fetchNotifications = async () => {
        try {
            let notificationData;
            if (role === 'CUSTOMER') {
                notificationData = await getNotificationByCustomers(currentUserId);
            } else if (role === 'QUALITY' || role === 'SALES') {
                notificationData = await getNotificationByManagers(currentUserId);
            }
            setNewNotificationList(notificationData.filter(notification => !notification.isRead));
        } catch (error) {
            console.error(error);
        }
    };

    const fetchReadNotifications = async () => {
        try {
            let readNotificationData;
            if (role === 'CUSTOMER') {
                readNotificationData = await getReadNotificationByCustomers(currentUserId);
            } else if (role === 'QUALITY' || role === 'SALES') {
                readNotificationData = await getReadNotificationByManagers(currentUserId);
            }
            setReadNotificationList(readNotificationData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [currentUserId]);

    useEffect(() => {
        if (activeTab === 'read') {
            fetchReadNotifications();
        }
    }, [activeTab, currentUserId]);

    const handleNotificationClick = async (notificationId) => {
        try {
            if (role === 'CUSTOMER') {
                await updateNotificationIsReadByCustomer(notificationId);
            } else if (role === 'QUALITY' || role === 'SALES') {
                await updateNotificationIsReadByManager(notificationId);
            }
            fetchNotifications();
            if (activeTab === 'read') {
                fetchReadNotifications();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ModalContent onClick={(e) => e.stopPropagation()}>
            <Title>알림</Title>
            <ModalTabs>
                <TabButton active={activeTab === 'new'} onClick={() => switchTab('new')}>
                    새 알림
                </TabButton>
                <TabButton active={activeTab === 'read'} onClick={() => switchTab('read')}>
                    읽은 알림
                </TabButton>
            </ModalTabs>

            <div>
                {activeTab === 'new' ? (
                    <NotificationList>
                        {newNotificationList.length > 0 ? (
                            newNotificationList.map(notification => (
                                <NotificationBox key={notification.id} read={false}>
                                    <div>
                                        <img src={bell} alt="notification" />
                                    </div>
                                    <NotificationText onClick={() => handleNotificationClick(notification.id)}>
                                        {notification.date}
                                        <span>&nbsp;{notification.contents}</span>
                                    </NotificationText>
                                    <div>
                                        <img src={circle} alt="notification" />
                                    </div>
                                </NotificationBox>
                            ))
                        ) : (
                            <NoNotifications>새 알림이 없습니다.</NoNotifications>
                        )}
                    </NotificationList>
                ) : (
                    <NotificationList>
                        {readNotificationList.length > 0 ? (
                            readNotificationList.map(notification => (
                                <NotificationBox key={notification.id} read={true}>
                                    <div>
                                        <img src={readBell} alt="notification" />
                                    </div>
                                    <NotificationText>
                                        {notification.date}
                                        <span>&nbsp;{notification.contents}</span>
                                    </NotificationText>
                                    <div>
                                        <img src={readCircle} alt="notification" />
                                    </div>
                                </NotificationBox>
                            ))
                        ) : (
                            <NoNotifications>읽은 알림이 없습니다.</NoNotifications>
                        )}
                    </NotificationList>
                )}
            </div>
        </ModalContent>
    );
};

export default NotificationModal;

const ModalContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const ModalTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  width: 200px;
  color: ${(props) => (props.active ? '#03507d' : '#C1C1C1')};
  font-weight: ${(props) => (props.active ? '800' : '600')};
  border-bottom: ${(props) => (props.active ? '1px solid #03507d' : 'none')};
`;

const NotificationList = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const NotificationBox = styled.div`
  width: 87%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #03507D;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
  display: grid;
  grid-template-columns: 0.3fr 5fr 0.3fr;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: background-color 0.3s, border 0.3s;

  span {
    color: #121212;
  }

  &:hover {
    ${({ read }) => !read && `
      background-color: #9bccff;
      border: 1px solid #c1c1c1;
      color: #ffffff;
      cursor: pointer;

      span {
        color: #ffffff;
      }
    `}
  }

  ${({ read }) => read && `
      background-color: #ffffff;
      border: 1px solid #ababab;
      color: #ababab;

      span {
        color: #ababab;
      }
    `}
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;

const NotificationText = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
`;

const NoNotifications = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 20px;
`;

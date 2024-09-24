import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Drawer, List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import InquiryMonthlyOrderChart from '../../components/organisms/InquiryMonthlyOrderChart';
import InquiryProgressCountChart from '../../components/organisms/InquiryProgressCountChart';
import InquiryOrderCountChart from '../../components/organisms/InquiryOrderCountChart';
import InquiryProductProgressChart from '../../components/organisms/InquiryProductProgressChart';
import {
    getAverageMonthly,
    getCountsByProgress,
    getPercentageCompletedOrNot,
    getCountByProductType,
} from '../../apis/api/chart';
import { Dashboard_Container, Dashboard_Item } from '../../assets/css/Chart.css';
import profile from '../../assets/css/icons/profile.svg';
import { userName, getUserName } from '../../index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUserInfoByManagers } from '../../apis/api/auth';
import { useAuth } from '../../hooks/useAuth';

export default function DashBoard() {
    useEffect(() => {
        fetchData();
    }, []);

    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const { userId } = useAuth();
    const [name, setName] = useState(null);
    const [, setGlobalName] = useRecoilState(userName);
    const currentUserName = useRecoilValue(getUserName);

    const fetchData = async () => {
        try {
            const [monthlyOrder, progressCount, orderCount, productType] =
                await Promise.all([
                    getAverageMonthly(), // 월별 Inquiry 접수건 주문 체결 소요일 평균
                    getCountsByProgress(), // 전체 Inquiry 검토 현황별 건수
                    getPercentageCompletedOrNot(), // Inquiry 주문 완료 및 미완료 비중
                    getCountByProductType(), // 전체 제품별 주문 처리 현황
                ]);

            setItems([
                {
                    id: '1',
                    content: <InquiryMonthlyOrderChart data={monthlyOrder} name={currentUserName} />
                },
                {
                    id: '2',
                    content: <InquiryProgressCountChart data={progressCount} name={currentUserName} />
                },
                {
                    id: '3',
                    content: <InquiryOrderCountChart data={orderCount} name={currentUserName} />
                },
                {
                    id: '4',
                    content: <InquiryProductProgressChart data={productType} name={currentUserName} />
                },
            ]);
        } catch (error) {
            console.error('대시보드 데이터 조회 실패: ', error);
        } finally {
            setLoading(false);
        }
    };

    const findUserName = async () => {
        try {
                const manager = await getUserInfoByManagers(userId);
                setName(manager.data.data.name);
                setGlobalName(manager.data.data.name);
            return name;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        findUserName();
    }, [userId]);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setItems(reorderedItems);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

        const renderContent = () => {
            if (activeTab === 'Dashboard') {
                return (
                    <>
                        {isLoading ? (
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                                width={'100%'}
                                height={'85vh'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="droppable"
                                           direction="vertical">
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={Dashboard_Container}
                                        >
                                            {items.map((item, index) => (
                                                <Draggable key={item.id}
                                                           draggableId={item.id}
                                                           index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={Dashboard_Item}
                                                        >
                                                            {item.content}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                    </>
                );
            } else if (activeTab === 'Inquiry Log') {
                return <div>Inquiry Log 페이지</div>;
            } else if (activeTab === 'User Info') {
                return <div>User Info 페이지</div>;
            }
        };

        return (
            <Box sx={{ display: 'flex' }}>
                <Box sx={{
                    width: 240,
                    backgroundColor: '#2A3F54',
                    color: '#fff',
                    padding: '16px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '16px'
                    }}>
                        <Avatar
                            alt={'profile'}
                            src={profile}
                            sx={{
                                width: 120,
                                height: 120,
                                marginBottom: '8px',
                                marginTop: '40px'
                            }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: '700' }}>{currentUserName}</Typography>
                    </Box>
                    <List>
                        {[
                            { text: 'Dashboard', icon: <DashboardIcon /> },
                            { text: 'Inquiry Log', icon: <ReceiptIcon /> },
                            { text: 'User Info', icon: <PersonIcon /> },
                        ].map(({ text, icon }) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => handleTabChange(text)}
                                sx={{
                                    textAlign: 'center',
                                    '&:hover': { backgroundColor: '#1A2837' },
                                    backgroundColor: activeTab === text ? '#1A2837' : 'transparent',
                                }}
                            >
                                {icon} {/* 아이콘 추가 */}
                                <ListItemText primary={text} sx={{ marginLeft: '8px' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box component="main" sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: '#F4F5FB',
                    height: '100vh'
                }}>
                    {renderContent()}
                </Box>
            </Box>
        );
    }
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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

export default function DashBoard() {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

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
                { id: '1', content: <InquiryMonthlyOrderChart data={monthlyOrder} /> },
                { id: '2', content: <InquiryProgressCountChart data={progressCount} /> },
                { id: '3', content: <InquiryOrderCountChart data={orderCount} /> },
                { id: '4', content: <InquiryProductProgressChart data={productType} /> },
            ]);
        } catch (error) {
            console.error('대시보드 데이터 조회 실패: ', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setItems(reorderedItems);
    };

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
                    <Droppable droppableId="droppable" direction="vertical">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={Dashboard_Container}
                            >
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
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
}

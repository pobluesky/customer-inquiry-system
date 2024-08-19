import React, { useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../mocules/QuestionOverview';
import QuestionFilterPanel from '../mocules/QuestionFilterPanel';
import QuestionCardList from '../../components/templates/QuestionCardList';
// import Notification from '../../components/mocules/NotificationModal';

function QuestionDashboard() {
    const [totalItems, setTotalItems] = useState('');
    const [readyItems, setReadyItems] = useState('');
    const [completedItems, setCompletedItems] = useState('');

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const [searchTitle, setSearchTitle] = useState('');
    const [searchStartDate, setSearchStartDate] = useState('');
    const [searchEndDate, setSearchEndDate] = useState('');
    const [searchCustomerName, setSearchCustomerName] = useState('');
    const [searchTimeFilter, setSearchTimeFilter] = useState('');
    const [searchStatusFilter, setSearchStatusFilter] = useState('');

    // 검색 기준 적용
    const searchByFilter = () => {
        setSearchTitle(title);
        setSearchStartDate(startDate);
        setSearchEndDate(endDate);
        setSearchTimeFilter(timeFilter);
        setSearchStatusFilter(statusFilter);
    };

    return (
        <>
            <QuestionOverview
                question_total={totalItems}
                question_ready={readyItems}
                question_completed={completedItems}
                question_collaboration={'99'}
            />
            <QuestionFilterPanel
                totalItems={totalItems}
                title={title}
                startDate={startDate}
                endDate={endDate}
                customerName={customerName}
                timeFilter={timeFilter}
                statusFilter={statusFilter}
                setTitle={setTitle}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setCustomerName={setCustomerName}
                setTimeFilter={setTimeFilter}
                setStatusFilter={setStatusFilter}
                searchByFilter={searchByFilter}
                />
            <Text
                name={'문의 목록'}
                width={'1320px'}
                margin={'24px auto 24px auto'}
                fontSize={'24px'}
                fontWeight={'600'}
                textColor={'#49454f'}
            />
            <QuestionCardList
                setTotalItems={setTotalItems}
                setReadyItems={setReadyItems}
                setCompletedItems={setCompletedItems}
                title={searchTitle}
                startDate={searchStartDate}
                endDate={searchEndDate}
                customerName={searchCustomerName}
                timeFilter={searchTimeFilter}
                statusFilter={searchStatusFilter}
            />
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

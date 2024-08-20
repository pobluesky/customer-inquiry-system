import React, { useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../mocules/QuestionOverview';
import QuestionFilterPanel from '../mocules/QuestionFilterPanel';
import QuestionCardList from '../../components/templates/QuestionCardList';
// import Notification from '../../components/mocules/NotificationModal';

function QuestionDashboard() {
    const [searchedItems, setSearchedItems] = useState('');
    const [totalItems, setTotalItems] = useState('');
    const [readyItems, setReadyItems] = useState('');
    const [completedItems, setCompletedItems] = useState('');

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [questionNo, setQuestionNo] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const [searchTitle, setSearchTitle] = useState('');
    const [searchStartDate, setSearchStartDate] = useState('');
    const [searchEndDate, setSearchEndDate] = useState('');
    const [searchCustomerName, setSearchCustomerName] = useState('');
    const [searchQuestionNo, setSearchQuestionNo] = useState('');
    const [searchTimeFilter, setSearchTimeFilter] = useState('');
    const [searchStatusFilter, setSearchStatusFilter] = useState('');

    // 검색 기준 적용
    const searchByFilter = () => {
        setSearchTitle(title);
        setSearchStartDate(startDate);
        setSearchEndDate(endDate);
        setSearchCustomerName(customerName);
        setSearchQuestionNo(questionNo);
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
                searchedItems={searchedItems}
                totalItems={totalItems}
                title={title}
                startDate={startDate}
                endDate={endDate}
                customerName={customerName}
                questionNo={questionNo}
                timeFilter={timeFilter}
                statusFilter={statusFilter}
                setTitle={setTitle}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setCustomerName={setCustomerName}
                setQuestionNo={setQuestionNo}
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
                setSearchedItems={setSearchedItems}
                setTotalItems={setTotalItems}
                setReadyItems={setReadyItems}
                setCompletedItems={setCompletedItems}
                title={searchTitle}
                startDate={searchStartDate}
                endDate={searchEndDate}
                customerName={searchCustomerName}
                questionNo={searchQuestionNo}
                timeFilter={searchTimeFilter}
                statusFilter={searchStatusFilter}
            />
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

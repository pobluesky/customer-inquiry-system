import React, { useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../mocules/QuestionOverview';
import QuestionFilterPanel from '../mocules/QuestionFilterPanel';
import QuestionCardList from '../../components/templates/QuestionCardList';
// import Notification from '../../components/mocules/NotificationModal';

function QuestionDashboard() {
    const [totalItems, setTotalItems] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchByTitle, setSearchByTitle] = useState('');
    const [filter, setFilter] = useState('latest');

    // const totalItems = 99;
    const readyItems = 99;
    const completedItems = 99;

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
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                filter={filter}
                setFilter={setFilter}
                searchByTitle={searchByTitle}
                setSearchByTitle={setSearchByTitle}
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
                startDate={startDate}
                endDate={endDate}
                filter={filter}
                searchByTitle={searchByTitle}
            />
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

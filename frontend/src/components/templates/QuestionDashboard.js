import React, { useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../organisms/QuestionOverview';
import QuestionFilterPanel from '../organisms/QuestionFilterPanel';
import QuestionTable from '../mocules/QuestionTable';
import QuestionModal from '../mocules/QuestionModal';
import QuestionCardList from '../mocules/QuestionCardList';
// import Notification from '../../components/mocules/NotificationModal';

function QuestionDashboard() {
    const [searchedItems, setSearchedItems] = useState('');
    const [totalItems, setTotalItems] = useState('');
    const [readyItems, setReadyItems] = useState('');
    const [completedItems, setCompletedItems] = useState('');
    
    // 검색 기능
    const [questionNo, setQuestionNo] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // 테이블과 모달창 간 상호 API 전달
    const [questionDetail, setQuestionDetail] = useState([]);
    const [questionId, setQuestionId] = useState('');
    const [status, setStatus] = useState('READY');
    const [openModal, setOpenModal] = useState('false)');

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
                // searchByFilter={searchByFilter}
            />
            <Text
                name={'문의 목록'}
                width={'1320px'}
                margin={'24px auto 24px auto'}
                fontSize={'24px'}
                fontWeight={'600'}
                textColor={'#49454f'}
            />
            <QuestionTable
                questionNo={questionNo}
                customerName={customerName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                timeFilter={timeFilter}
                statusFilter={statusFilter}

                setQuestionDetail={setQuestionDetail}
                setQuestionId={setQuestionId}
                setStatus={setStatus}
                status={status}
                setOpenModal={setOpenModal}   
                openModal={openModal}         

                // setSearchedItems={setSearchedItems}
                // setTotalItems={setTotalItems}
                // setReadyItems={setReadyItems}
                // setCompletedItems={setCompletedItems}
            />





            {openModal && (
                <QuestionModal
                    questionId={questionId}
                    questionDetail={questionDetail}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    // questionId={questionId}
                    // colId={colId}
                    // setStatus={setStatus}
                    // status={status}
                    // setHeight={setHeight}
                    // height={height}
                    // auth={auth}
                    // colDetail={colDetail}
                    // setOpenModal={setOpenModal}
                    // openModal={openModal}
                />
            )}
            {/* <QuestionCardList
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
            /> */}
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

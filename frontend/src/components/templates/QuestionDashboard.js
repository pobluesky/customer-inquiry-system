import React, { useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../organisms/QuestionOverview';
import QuestionFilterPanel from '../organisms/QuestionFilterPanel';
import QuestionTable from '../mocules/QuestionTable';
import QuestionModal from '../mocules/QuestionModal';
// import Notification from '../../components/mocules/NotificationModal';

function QuestionDashboard() {
    const [searchedItems, setSearchedItems] = useState('');
    const [totalItems, setTotalItems] = useState('');
    const [readyItems, setReadyItems] = useState('');
    const [completedItems, setCompletedItems] = useState('');

    // 검색 기능
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [questionNo, setQuestionNo] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    // 테이블과 모달 간 상호 API 전달
    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);
    const [questionId, setQuestionId] = useState('');
    const [status, setStatus] = useState('READY');
    const [openModal, setOpenModal] = useState(false);

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

                questionNo={questionNo}
                customerName={customerName}
                title={title}
                startDate={startDate}
                endDate={endDate}
                timeFilter={timeFilter}
                statusFilter={statusFilter}
                typeFilter={typeFilter}

                setQuestionNo={setQuestionNo}
                setCustomerName={setCustomerName}
                setTitle={setTitle}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setTimeFilter={setTimeFilter}
                setStatusFilter={setStatusFilter}
                setTypeFilter={setTypeFilter}
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
                title={title}
                startDate={startDate}
                endDate={endDate}
                questionNo={questionNo}
                customerName={customerName}
                timeFilter={timeFilter}
                statusFilter={statusFilter}
                typeFilter={typeFilter}

                setQuestionDetail={setQuestionDetail}
                setAnswerDetail={setAnswerDetail}
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
                    questionDetail={questionDetail}
                    setAnswerDetail={setAnswerDetail}
                    answerDetail={answerDetail}
                    questionId={questionId}
                    setStatus={setStatus}
                    status={status}
                    setOpenModal={setOpenModal}
                />
            )}
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

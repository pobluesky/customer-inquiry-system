import React, { useEffect, useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../organisms/QuestionOverview';
import QuestionFilterPanel from '../organisms/QuestionFilterPanel';
import QuestionTable from '../organisms/QuestionTable';
import QuestionModal from '../molecules/QuestionModal';
// import Notification from '../../components/molecules/NotificationModal';
import { useAuth } from '../../hooks/useAuth';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import { getAllAnswer, getAnswerByUserId } from '../../apis/api/answer';
import { getAllCollaboration } from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';

export default function QuestionDashboard() {
    const [searchedItems, setSearchedItems] = useState('');

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

    // 질문 답변 현황
    const { userId } = useAuth();
    const role = getCookie('userRole');
    const [questionCount, setQuestionCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [colCount, setColCount] = useState(0);
    const [searchCount, setSearchCount] = useState(0);

    const fetchGetQuestionCount =
        role === 'CUSTOMER'
            ? async () => {
                  try {
                      const response = await getQuestionByUserId(userId, '');
                      setQuestionCount(response.data.length);
                  } catch (error) {
                      console.log('고객사 질문 개수 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllQuestion('');
                      setQuestionCount(response.data.length);
                  } catch (error) {
                      console.log('담당자 질문 개수 조회 실패: ', error);
                  }
              };

    const fetchGetAnswerCount =
        role === 'CUSTOMER'
            ? async () => {
                  try {
                      const response = await getAnswerByUserId(userId, '');
                      setAnswerCount(response.data.length);
                  } catch (error) {
                      console.log('고객사 답변 개수 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllAnswer();
                      setAnswerCount(response.data.length);
                  } catch (error) {
                      console.log('담당자 답변 개수 조회 실패: ', error);
                  }
              };

    const fetchGetColCount = async () => {
        try {
            const response = await getAllCollaboration('');
            setColCount(response.data.length);
        } catch (error) {
            console.log('협업 목록 개수 조회 실패: ', error);
        }
    };

    useEffect(() => {
        fetchGetQuestionCount();
        fetchGetAnswerCount();
        fetchGetColCount();
    }, [userId]);

    return (
        <>
            <QuestionOverview
                questionCount={questionCount}
                answerCount={answerCount}
                colCount={colCount}
            />
            <QuestionFilterPanel
                searchCount={searchCount}
                title={title}
                startDate={startDate}
                endDate={endDate}
                questionNo={questionNo}
                customerName={customerName}
                setTitle={setTitle}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setQuestionNo={setQuestionNo}
                setCustomerName={setCustomerName}
                setTimeFilter={setTimeFilter}
                setStatusFilter={setStatusFilter}
                questionDetail={questionDetail}
                setTypeFilter={setTypeFilter}
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
                setSearchCount={setSearchCount}
                setQuestionDetail={setQuestionDetail}
                setAnswerDetail={setAnswerDetail}
                setQuestionId={setQuestionId}
                setStatus={setStatus}
                status={status}
                setOpenModal={setOpenModal}
                openModal={openModal}
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

import React, { useEffect, useState } from 'react';
import QuestionOverview from '../organisms/VocOverview';
import QuestionFilterInput from '../organisms/QuestionFilterInput';
import QuestionList from '../organisms/QuestionList';
import { Voc_Dashboard } from '../../assets/css/Voc.css';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import { getAllAnswer, getAnswerByUserId } from '../../apis/api/answer';
import { getAllCollaboration } from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';

export default function QuestionDashboard() {
    // 검색 기능
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [questionNo, setQuestionNo] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [idFilter, setIdFilter] = useState('');

    // 질문 답변 현황
    const userId = getCookie('userId');
    const role = getCookie('userRole');
    const [questionCount, setQuestionCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [colCount, setColCount] = useState(0);
    const [searchCount, setSearchCount] = useState(0);

    const fetchGetQuestionCount =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getQuestionByUserId(userId, '');
                      setQuestionCount(response.data.totalElements);
                  } catch (error) {
                      console.log('고객사 질문 개수 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllQuestion('');
                      setQuestionCount(response.data.totalElements);
                  } catch (error) {
                      console.log('담당자 질문 개수 조회 실패: ', error);
                  }
              };

    const fetchGetAnswerCount =
        role === 'customer'
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
            setColCount(response.data.colListInfo.length);
        } catch (error) {
            console.log('협업 목록 개수 조회 실패: ', error);
        }
    };

    useEffect(() => {
        fetchGetQuestionCount();
        fetchGetAnswerCount();
        fetchGetColCount();
        localStorage.clear();
    }, [userId]);

    return (
        <>
            <QuestionOverview
                questionCount={questionCount}
                answerCount={answerCount}
                colCount={colCount}
            />
            {searchCount ? (
                <div className={Voc_Dashboard}>
                    검색 결과는 총 <span>{searchCount}</span>건입니다.
                </div>
            ) : (
                <div className={Voc_Dashboard}>검색 결과가 없습니다.</div>
            )}
            <QuestionFilterInput
                title={title}
                questionNo={questionNo}
                customerName={customerName}
                setTitle={setTitle}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setQuestionNo={setQuestionNo}
                setCustomerName={setCustomerName}
                setTimeFilter={setTimeFilter}
                setStatusFilter={setStatusFilter}
                setIdFilter={setIdFilter}
                setTypeFilter={setTypeFilter}
            />
            <QuestionList
                title={title}
                startDate={startDate}
                endDate={endDate}
                questionNo={questionNo}
                customerName={customerName}
                timeFilter={timeFilter}
                statusFilter={statusFilter}
                typeFilter={typeFilter}
                idFilter={idFilter}
                setSearchCount={setSearchCount}
            />
        </>
    );
}

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCookie } from '../../apis/utils/cookies';
import QuestionViewer from '../organisms/QuestionViewer';
import AnswerInput from '../organisms/AnswerInput';
import {
    getQuestionByQuestionId,
    getQuestionByQuestionIdForManager,
} from '../../apis/api/question';
import {
    getAnswerByQuestionId,
    getAnswerByQuestionIdForManager,
} from '../../apis/api/answer';
import { useAuth } from '../../hooks/useAuth';

export default function AnswerForm() {
    const location = useLocation();
    const { questionId } = location.state;
    const { userId } = useAuth();
    const role = getCookie('userRole');
    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);

    // 질문 상세 조회 (모달로 전달)
    const fetchGetQuestionDetail =
        role === 'customer'
            ? async (questionId) => {
                  try {
                      const response = await getQuestionByQuestionId(
                          userId,
                          questionId,
                      );
                      setQuestionDetail(response.data); // 질문 상세 내용 저장
                      if (response.data.status === 'COMPLETED') {
                          // 답변 완료 질문인 경우
                          fetchGetAnswerDetail(questionId); // 답변 상세 조회 API 호출
                      } else {
                          // 답변 대기 질문인 경우
                          setAnswerDetail([]); // 답변 Empty Array 전달
                      }
                  } catch (error) {
                      console.log('고객사 질문 상세 조회 실패: ', error);
                  }
              }
            : async (questionId) => {
                  try {
                      const response = await getQuestionByQuestionIdForManager(
                          questionId,
                      );
                      setQuestionDetail(response.data); // 질문 상세 내용 저장
                      if (response.data.status === 'COMPLETED') {
                          // 답변 완료 질문인 경우
                          fetchGetAnswerDetail(questionId); // 답변 상세 조회 API 호출
                      } else {
                          // 답변 대기 질문인 경우
                          setAnswerDetail([]); // 답변 Empty Array 전달
                      }
                  } catch (error) {
                      console.log('담당자 질문 상세 조회 실패: ', error);
                  }
              };

    // 답변 상세 조회 (모달로 전달)
    const fetchGetAnswerDetail =
        role === 'customer'
            ? async (questionId) => {
                  try {
                      const response = await getAnswerByQuestionId(
                          userId,
                          questionId,
                      );
                      setAnswerDetail(response.data); // 답변 상세 내용 저장
                  } catch (error) {
                      console.log('고객사 답변 상세 조회 실패: ', error);
                  }
              }
            : async (questionId) => {
                  try {
                      const response = await getAnswerByQuestionIdForManager(
                          questionId,
                      );
                      setAnswerDetail(response.data); // 답변 상세 내용 저장
                  } catch (error) {
                      console.log('담당자 답변 상세 조회 실패: ', error);
                  }
              };

    useEffect(() => {
        fetchGetQuestionDetail(questionId);
        fetchGetAnswerDetail(questionId);
    }, [questionId]);

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <AnswerInput
                questionId={questionId}
                questionDetail={questionDetail}
                answerDetail={answerDetail}
                setAnswerDetail={setAnswerDetail}
            />
        </div>
    );
}

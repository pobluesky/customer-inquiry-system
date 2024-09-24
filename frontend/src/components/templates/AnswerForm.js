import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { getCollaborationDetailStatus } from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';

export default function AnswerForm() {
    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const { questionId } = useParams();
    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);
    const [colPossible, setColPossible] = useState(false);

    // 질문 상세 조회
    const fetchGetQuestionDetail =
        role === 'customer'
            ? async (questionId) => {
                  try {
                      const response = await getQuestionByQuestionId(
                          userId,
                          questionId,
                      );
                      setQuestionDetail(response.data);
                      if (response.data.status === 'COMPLETED') {
                          fetchGetAnswerDetail(questionId);
                      } else {
                          localStorage.removeItem(`answerDetail-${questionId}`);
                          fetchGetColDetailStatus(questionId);
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
                      setQuestionDetail(response.data);
                      if (response.data.status === 'COMPLETED') {
                          fetchGetAnswerDetail(questionId);
                      } else {
                          localStorage.removeItem(`answerDetail-${questionId}`);
                          fetchGetColDetailStatus(questionId);
                      }
                  } catch (error) {
                      console.log('담당자 질문 상세 조회 실패: ', error);
                  }
              };

    // 답변 상세 조회
    const fetchGetAnswerDetail =
        role === 'customer'
            ? async (questionId) => {
                  try {
                      const response = await getAnswerByQuestionId(
                          userId,
                          questionId,
                      );
                      setAnswerDetail(response.data);
                  } catch (error) {
                      console.log('고객사 답변 상세 조회 실패: ', error);
                  }
              }
            : async (questionId) => {
                  try {
                      const response = await getAnswerByQuestionIdForManager(
                          questionId,
                      );
                      setAnswerDetail(response.data);
                  } catch (error) {
                      console.log('담당자 답변 상세 조회 실패: ', error);
                  }
              };

    // 협업 상태 상세 조회
    const fetchGetColDetailStatus = async (questionId) => {
        try {
            await getCollaborationDetailStatus(questionId);
            setColPossible(false);
        } catch (error) {
            setColPossible(true);
        }
    };

    useEffect(() => {
        fetchGetQuestionDetail(questionId);
    }, [questionId]);

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <AnswerInput
                questionDetail={questionDetail}
                answerDetail={answerDetail}
                colPossible={colPossible}
            />
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
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
    useEffect(() => {
        fetchGetQuestionDetail(questionId);
    }, [questionId]);

    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const { questionId } = useParams();

    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);
    const [colPossible, setColPossible] = useState(false);

    const [isQuestionLoading, setQuestionLoading] = useState(true);
    const [isAnswerOrColLoading, setAnswerOrColLoading] = useState(true);

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
                          setAnswerOrColLoading(false);
                      }
                  } catch (error) {
                      console.log('고객사 질문 상세 조회 실패: ', error);
                  } finally {
                      setQuestionLoading(false);
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
                  } finally {
                      setQuestionLoading(false);
                  }
              };

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
                  } finally {
                      setAnswerOrColLoading(false);
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
                  } finally {
                      setAnswerOrColLoading(false);
                  }
              };

    // 협업 상태 상세 조회
    const fetchGetColDetailStatus = async (questionId) => {
        try {
            await getCollaborationDetailStatus(questionId);
            setColPossible(false);
            setAnswerOrColLoading(false);
        } catch (error) {
            setColPossible(true);
            setAnswerOrColLoading(false);
        }
    };

    return (
        <>
            {isQuestionLoading || isAnswerOrColLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                    }}
                    width={'100%'}
                    height={'65vh'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <div>
                    <QuestionViewer questionDetail={questionDetail} />
                    <AnswerInput
                        questionDetail={questionDetail}
                        answerDetail={answerDetail}
                        colPossible={colPossible}
                    />
                </div>
            )}
        </>
    );
}

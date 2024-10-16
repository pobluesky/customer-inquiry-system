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
import { isCollaborated } from '../../apis/api/collaboration';
import { getFileDownloadUrl } from '../../apis/api/file';
import { getCookie } from '../../apis/utils/cookies';

export default function AnswerForm({ setVocNo }) {
    useEffect(() => {
        fetchGetColCheck(questionId);
        fetchGetQuestionDetail(questionId);
    }, [questionId]);

    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const { questionId } = useParams();

    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);
    const [colPossible, setColPossible] = useState(true);

    const [isQuestionLoading, setQuestionLoading] = useState(true);
    const [isAnswerLoading, setAnswerLoading] = useState(true);
    const [isColChecked, setColChecked] = useState(true);

    const [secretPath, setSecretPath] = useState('');

    const fetchGetColCheck = async (questionId) => {
        try {
            await isCollaborated(questionId);
            setColPossible(false);
        } catch {
        } finally {
            setColChecked(true);
        }
    };

    const fetchGetQuestionDetail =
        role === 'customer'
            ? async (questionId) => {
                  try {
                      const response = await getQuestionByQuestionId(
                          userId,
                          questionId,
                      );
                      setQuestionDetail(response.data);
                      setVocNo(
                          response.data.createdDate
                              .substring(0, 10)
                              .replace(/-/g, '') +
                              response.data.questionId
                                  .toString()
                                  .padStart(3, '0'),
                      );
                      if (response.data.filePath != null) {
                          const url = await getFileDownloadUrl(
                              response.data.filePath,
                          );
                          setSecretPath(url);
                      }
                      if (response.data.status === 'COMPLETED') {
                          fetchGetAnswerDetail(questionId);
                      } else {
                          setAnswerLoading(false);
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
                      setVocNo(
                          response.data.createdDate
                              .substring(0, 10)
                              .replace(/-/g, '') +
                              response.data.questionId
                                  .toString()
                                  .padStart(3, '0'),
                      );
                      if (response.data.filePath != null) {
                          const url = await getFileDownloadUrl(
                              response.data.filePath,
                          );
                          setSecretPath(url);
                      }
                      if (response.data.status === 'COMPLETED') {
                          fetchGetAnswerDetail(questionId);
                      } else {
                          setAnswerLoading(false);
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
                      setAnswerLoading(false);
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
                      setAnswerLoading(false);
                  }
              };

    return (
        <>
            {(isQuestionLoading || isAnswerLoading) && isColChecked ? (
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
                    <QuestionViewer
                        questionDetail={questionDetail}
                        secretPath={secretPath}
                    />
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

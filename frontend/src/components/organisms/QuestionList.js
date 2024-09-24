import React, { useEffect, useState } from 'react';
import { getCookie } from '../../apis/utils/cookies';
import VocPageButton from './VocPageButton';
import {
    Question_List_Container,
    Question_List,
    Ready,
    Completed,
} from '../../assets/css/Voc.css';
import {
    getAllQuestion,
    getQuestionByUserId,
    getQuestionByQuestionId,
    getQuestionByQuestionIdForManager,
} from '../../apis/api/question';
import {
    getAnswerByQuestionId,
    getAnswerByQuestionIdForManager,
} from '../../apis/api/answer';
import { getCollaborationDetailStatus } from '../../apis/api/collaboration';
import { useNavigate } from 'react-router-dom';

export default function QuestionList({
    title,
    startDate,
    endDate,
    questionNo,
    customerName,
    timeFilter,
    statusFilter,
    idFilter,
    typeFilter,
    setSearchCount,
}) {
    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const navigate = useNavigate();

    const [filterArgs, setFilterArgs] = useState('');
    const [questionSummary, setQuestionSummary] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState('');

    useEffect(() => {
        let args = '';
        if (title) {
            args += `${args ? '&' : ''}title=${title}`;
        }
        if (startDate) {
            const s = `startDate=${
                new Date(startDate).toISOString().split('T')[0]
            }`;
            args += `${args ? '&' : ''}${s}`;
        }
        if (endDate) {
            const e = `endDate=${
                new Date(endDate).toISOString().split('T')[0]
            }`;
            args += `${args ? '&' : ''}${e}`;
        }
        if (questionNo) {
            args += `${args ? '&' : ''}questionId=${questionNo}`;
        }
        if (customerName) {
            args += `${args ? '&' : ''}customerName=${customerName}`;
        }
        if (timeFilter) {
            args += `${args ? '&' : ''}sortBy=${timeFilter}`;
        }
        if (statusFilter) {
            args += `${args ? '&' : ''}status=${statusFilter}`;
        }
        if (idFilter) {
            args += `${args ? '&' : ''}managerId=${idFilter}`;
        }
        if (typeFilter) {
            args += `${args ? '&' : ''}type=${typeFilter}`;
        }
        setFilterArgs(args);
    }, [
        questionNo,
        title,
        startDate,
        endDate,
        questionNo,
        customerName,
        timeFilter,
        statusFilter,
        idFilter,
        typeFilter,
    ]);

    // 질문 요약 조회
    const fetchGetQuestions =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getQuestionByUserId(
                          userId,
                          currentPage - 1,
                          filterArgs,
                      );
                      setQuestionSummary(response.data.questionsInfo);
                      setTotalPages(response.data.totalPages);
                      setSearchCount(response.data.totalElements);
                  } catch (error) {
                      console.log('고객사 질문 요약 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllQuestion(
                          currentPage - 1,
                          filterArgs,
                      );
                      setQuestionSummary(response.data.questionsInfo);
                      setTotalPages(response.data.totalPages);
                      setSearchCount(response.data.totalElements);
                  } catch (error) {
                      console.log('담당자 질문 요약 조회 실패: ', error);
                  }
              };

    // // 질문 상세 조회
    // const fetchGetQuestionDetail =
    //     role === 'customer'
    //         ? async (questionId) => {
    //               try {
    //                   const response = await getQuestionByQuestionId(
    //                       userId,
    //                       questionId,
    //                   );
    //                   localStorage.setItem(
    //                       `questionDetail-${questionId}`,
    //                       JSON.stringify(response.data),
    //                   );
    //                   if (response.data.status === 'COMPLETED') {
    //                       fetchGetAnswerDetail(questionId);
    //                   } else {
    //                       localStorage.removeItem(`answerDetail-${questionId}`);
    //                       fetchGetColDetailStatus(questionId);
    //                   }
    //               } catch (error) {
    //                   console.log('고객사 질문 상세 조회 실패: ', error);
    //               }
    //           }
    //         : async (questionId) => {
    //               try {
    //                   const response = await getQuestionByQuestionIdForManager(
    //                       questionId,
    //                   );
    //                   localStorage.setItem(
    //                       `questionDetail-${questionId}`,
    //                       JSON.stringify(response.data),
    //                   );
    //                   if (response.data.status === 'COMPLETED') {
    //                       fetchGetAnswerDetail(questionId);
    //                   } else {
    //                       localStorage.removeItem(`answerDetail-${questionId}`);
    //                       fetchGetColDetailStatus(questionId);
    //                   }
    //               } catch (error) {
    //                   console.log('담당자 질문 상세 조회 실패: ', error);
    //               }
    //           };

    // // 답변 상세 조회
    // const fetchGetAnswerDetail =
    //     role === 'customer'
    //         ? async (questionId) => {
    //               try {
    //                   const response = await getAnswerByQuestionId(
    //                       userId,
    //                       questionId,
    //                   );
    //                   localStorage.setItem(
    //                       `answerDetail-${questionId}`,
    //                       JSON.stringify(response.data),
    //                   );
    //                   window.open(`/voc-form/answer/${questionId}`, '_blank');
    //               } catch (error) {
    //                   console.log('고객사 답변 상세 조회 실패: ', error);
    //               }
    //           }
    //         : async (questionId) => {
    //               try {
    //                   const response = await getAnswerByQuestionIdForManager(
    //                       questionId,
    //                   );
    //                   localStorage.setItem(
    //                       `answerDetail-${questionId}`,
    //                       JSON.stringify(response.data),
    //                   );
    //                   window.open(`/voc-form/answer/${questionId}`, '_blank');
    //               } catch (error) {
    //                   console.log('담당자 답변 상세 조회 실패: ', error);
    //               }
    //           };

    // const fetchGetColDetailStatus = async (questionId) => {
    //     try {
    //         await getCollaborationDetailStatus(questionId);
    //         localStorage.setItem(
    //             `answerDetail-${questionId}`,
    //             JSON.stringify([]),
    //         );
    //         localStorage.setItem('colPossible', JSON.stringify(false));
    //         window.open(`/voc-form/answer/${questionId}`, '_blank');
    //     } catch (error) {
    //         localStorage.setItem(
    //             `answerDetail-${questionId}`,
    //             JSON.stringify([]),
    //         );
    //         localStorage.setItem('colPossible', JSON.stringify(true));
    //         window.open(`/voc-form/answer/${questionId}`, '_blank');
    //     }
    // };

    useEffect(() => {
        fetchGetQuestions();
    }, [userId, currentPage, filterArgs]);

    const contentsEllipsis = {
        maxWidth: '1320px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        <div className={Question_List_Container}>
            {questionSummary
                .filter((data) => data.isActivated)
                .map((data, idx) => (
                    <div key={idx}>
                        {!idx && <hr />}
                        <div
                            className={Question_List}
                            onClick={() => {
                                navigate(
                                    `/voc-form/answer/${data.questionId}`,
                                    // {
                                    //     state: {
                                    //         questionDetail: questionDetail,
                                    //     },
                                    // },
                                );
                            }}
                        >
                            <div>
                                <div>
                                    {data.type === 'INQ'
                                        ? 'Inquiry 문의'
                                        : data.type === 'SITE'
                                        ? '사이트 문의'
                                        : '기타 문의'}
                                </div>
                                {data.status === 'READY' ? (
                                    <div className={Ready}>답변 대기</div>
                                ) : (
                                    <div className={Completed}>답변 완료</div>
                                )}
                                <div>{data.title}</div>
                            </div>
                            <div style={contentsEllipsis}>
                                {data.contents.replace(/<\/?[^>]+(>|$)/g, '')}
                            </div>
                            <div>
                                <div>
                                    {data.questionCreatedAt.substring(0, 10)}
                                </div>
                                <div>{data.customerName}</div>
                            </div>
                            <hr />
                        </div>
                    </div>
                ))}
            <VocPageButton
                totalPages={totalPages}
                currentPage={currentPage}
                setPage={setCurrentPage}
            />
        </div>
    );
}

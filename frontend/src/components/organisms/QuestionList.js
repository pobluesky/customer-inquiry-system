import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VocPageButton from './VocPageButton';
import { getCookie } from '../../apis/utils/cookies';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import {
    Question_List_Container,
    Question_List,
    Ready,
    Completed,
} from '../../assets/css/Voc.css';

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
    const navigate = useNavigate();

    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const [filterArgs, setFilterArgs] = useState('');
    const [questionSummary, setQuestionSummary] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState('');

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

    const contentsEllipsis = {
        maxWidth: '1320px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'INQ':
                return 'Inquiry 문의';
            case 'SITE':
                return '사이트 문의';
            case 'ETC':
                return '기타 문의';
        }
    };

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

    useEffect(() => {
        fetchGetQuestions();
    }, [userId, currentPage, filterArgs]);

    useEffect(() => {
        sessionStorage.clear();
    }, []);

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
                                navigate(`/voc-form/answer/${data.questionId}`);
                            }}
                        >
                            <div>
                                <div>{getTypeLabel(data?.type)}</div>
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

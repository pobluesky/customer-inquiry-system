import React, { useState, useEffect } from 'react';
import Tag from '../atoms/Tag';
import QuestionCard from '../mocules/QuestionCard';
import QuestionModal from '../organisms/QuestionModal';
import {
    Question_Doesnt_Exist,
    Question_Card_List,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import { getAllAnswer, getAnswerByUserId } from '../../apis/api/answer';

// "문의 없음" 대체 카드
const QuestionDoesntExist = () => {
    return <div className={Question_Doesnt_Exist}>아직 문의가 없습니다.</div>;
};

// 문의 타입 태그
const VocTag = ({ category }) => (
    <Tag
        category={category}
        width={'156px'}
        height={'32px'}
        margin={'0 0 24px 0'}
        backgroundColor={'#2f4f79'}
        textColor={'#ffffff'}
        borderRadius={'10px'}
    />
);

function QuestionCardList({
    setSearchedItems,
    setTotalItems,
    setReadyItems,
    setCompletedItems,
    title,
    startDate,
    endDate,
    customerName,
    questionNo,
    timeFilter,
    statusFilter,
}) {
    const { userId } = useAuth();

    const [filterArgs, setFilterArgs] = useState('');
    const [questionSummary, setQuestionSummary] = useState('');
    const [questionCount, setQuestionCount] = useState('');
    const [answerCount, setAnswerCount] = useState('');
    const [openCard, setOpenCard] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [vocNo, setVocNo] = useState(0);
    const [status, setStatus] = useState('READY');

    const closeModal = () => {
        setOpenCard(false);
    };

    useEffect(() => {
        let args = '';
        if (startDate && endDate) {
            const s = `startDate=${
                new Date(startDate).toISOString().split('T')[0]
            }`;
            const e = `endDate=${
                new Date(endDate).toISOString().split('T')[0]
            }`;
            args += `${s}&${e}`;
        }
        if (timeFilter == 'LATEST' || timeFilter == 'OLDEST') {
            args += `${args ? '&' : ''}sortBy=${timeFilter}`;
        }
        if (statusFilter == 'COMPLETED' || statusFilter == 'READY') {
            args += `${args ? '&' : ''}status=${statusFilter}`;
        }
        setFilterArgs(args);
    }, [questionNo, title, startDate, endDate, timeFilter, statusFilter]);

    const fetchGetQuestions =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByUserId(
                      getCookie('userId'),
                      '',
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setQuestionCount(result);
                  } else {
                      setQuestionCount([]);
                  }
              }
            : async () => {
                  const result = await getAllQuestion(
                      '',
                  );
                  if (result) {
                      setQuestionCount(result);
                  } else {
                      setQuestionCount([]);
                  }
              };

    const fetchGetQuestionsByFilter =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByUserId(
                      getCookie('userId'),
                      filterArgs,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setQuestionSummary(result);
                  } else {
                      setQuestionSummary([]);
                  }
              }
            : async () => {
                  const result = await getAllQuestion(
                      filterArgs,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setQuestionSummary(result);
                  } else {
                      setQuestionSummary([]);
                  }
              };

    const fetchGetAnswers =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getAnswerByUserId(
                      getCookie('userId'),
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setAnswerCount(result);
                  } else {
                      setAnswerCount([]);
                  }
              }
            : async () => {
                  const result = await getAllAnswer(getCookie('accessToken'));
                  if (result) {
                      setAnswerCount(result);
                  } else {
                      setAnswerCount([]);
                  }
              };

    useEffect(() => {
        fetchGetQuestions();
        fetchGetQuestionsByFilter();
        fetchGetAnswers();
    }, [filterArgs, openCard]);

    // 질문 제목 + 고객 이름 + 질문 번호 검색
    const filterByTitleAndCustomerNameAndQuestionNo = (questions) => {
        if (!title && !customerName && !questionNo) return questions;
        return questions.filter((question) => {
            const titleMatch = title
                ? question.title.toLowerCase().includes(title.toLowerCase())
                : true;
            const customerNameMatch = customerName
                ? question.customerName
                      .toLowerCase()
                      .includes(customerName.toLowerCase())
                : true;
            const questionNoMatch = questionNo
                ? question.questionId == parseInt(questionNo, 10)
                : true;
            return titleMatch && customerNameMatch && questionNoMatch;
        });
    };

    const inqQuestions = filterByTitleAndCustomerNameAndQuestionNo(
        questionSummary.inqQuestions || [],
    );
    const siteQuestions = filterByTitleAndCustomerNameAndQuestionNo(
        questionSummary.siteQuestions || [],
    );
    const etcQuestions = filterByTitleAndCustomerNameAndQuestionNo(
        questionSummary.etcQuestions || [],
    );

    // 검색 결과, 전체 질문, 답변 대기 질문, 답변 완료 질문 현황
    useEffect(() => {
        const filteredQuestions = questionSummary.totalQuestionCount; // 필터링 질문 카운트
        const totalQuestions = questionCount.totalQuestionCount; // 전체 질문 카운트
        const totalAnswers = answerCount.length; // 전체 답변 카운트
        setSearchedItems(filteredQuestions);
        setTotalItems(totalQuestions);
        setReadyItems(totalQuestions - totalAnswers);
        setCompletedItems(totalAnswers);
    }, [questionSummary, questionCount, answerCount]);

    // Voc번호로 사용할 시분초
    const calDateNo = (datetime) => {
        const [, timePart] = datetime.split('T');
        const [hours, minutes, seconds] = timePart.split(':');
        return `${hours}${minutes}${seconds}`;
    };

    if (openCard) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <div className={Question_Card_List}>
                <div>
                    <VocTag category={'Inquiry 주문 문의'} />
                    {inqQuestions.length > 0 ? (
                        inqQuestions.map((inq, inqIdx) => (
                            <QuestionCard
                                key={inqIdx}
                                onClick={() => {
                                    setQuestionId(inq.questionId);
                                    setVocNo(
                                        userId +
                                            inq.questionId +
                                            calDateNo(inq.questionCreatedAt),
                                    );
                                    setStatus(inq.status);
                                    setOpenCard(true);
                                }}
                                status={inq.status}
                                questionNo={
                                    userId +
                                    inq.questionId +
                                    calDateNo(inq.questionCreatedAt)
                                }
                                customerName={inq.customerName}
                                questionCreatedDate={inq.questionCreatedAt.substr(
                                    0,
                                    10,
                                )}
                                answerCreatedDate={
                                    inq.answerCreatedAt &&
                                    inq.answerCreatedAt.substr(0, 10)
                                }
                                title={inq.title}
                            />
                        ))
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
                <div>
                    <VocTag category={'사이트 문의'} />
                    {siteQuestions.length > 0 ? (
                        siteQuestions.map((site, siteIdx) => (
                            <QuestionCard
                                key={siteIdx}
                                onClick={() => {
                                    setQuestionId(site.questionId);
                                    setVocNo(
                                        userId +
                                            site.questionId +
                                            calDateNo(site.questionCreatedAt),
                                    );
                                    setStatus(site.status);
                                    setOpenCard(true);
                                }}
                                status={site.status}
                                questionNo={
                                    userId +
                                    site.questionId +
                                    calDateNo(site.questionCreatedAt)
                                }
                                customerName={site.customerName}
                                questionCreatedDate={site.questionCreatedAt.substr(
                                    0,
                                    10,
                                )}
                                answerCreatedDate={
                                    site.answerCreatedAt &&
                                    site.answerCreatedAt.substr(0, 10)
                                }
                                title={site.title}
                            />
                        ))
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
                <div>
                    <VocTag category={'기타 문의'} />
                    {etcQuestions.length > 0 ? (
                        etcQuestions.map((etc, etcIdx) => (
                            <QuestionCard
                                key={etcIdx}
                                onClick={() => {
                                    setQuestionId(etc.questionId);
                                    setVocNo(
                                        userId +
                                            etc.questionId +
                                            calDateNo(etc.questionCreatedAt),
                                    );
                                    setStatus(etc.status);
                                    setOpenCard(true);
                                }}
                                status={etc.status}
                                questionNo={
                                    userId +
                                    etc.questionId +
                                    calDateNo(etc.questionCreatedAt)
                                }
                                customerName={etc.customerName}
                                questionCreatedDate={etc.questionCreatedAt.substr(
                                    0,
                                    10,
                                )}
                                answerCreatedDate={
                                    etc.answerCreatedAt &&
                                    etc.answerCreatedAt.substr(0, 10)
                                }
                                title={etc.title}
                            />
                        ))
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
            </div>
            {openCard && (
                <QuestionModal
                    questionId={questionId}
                    vocNo={vocNo}
                    status={status}
                    setStatus={setStatus}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default QuestionCardList;

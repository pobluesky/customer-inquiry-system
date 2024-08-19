import React, { useState, useEffect } from 'react';
import Tag from '../atoms/Tag';
import QuestionCard from '../mocules/QuestionCard';
import QuestionModal from '../organisms/QuestionModal';
import {
    Question_Doesnt_Exist,
    Question_Card_List,
} from '../../assets/css/Voc.css';
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
    setTotalItems,
    setReadyItems,
    setCompletedItems,
    title,
    startDate,
    endDate,
    customerName,
    timeFilter,
    statusFilter,
}) {
    const [filterArgs, setFilterArgs] = useState('');
    const [questionSummary, setQuestionSummary] = useState({});
    const [questionCount, setQuestionCount] = useState({});
    const [answerCount, setAnswerCount] = useState({});
    const [openCard, setOpenCard] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [status, setStatus] = useState('READY');

    const closeModal = () => {
        setOpenCard(false);
    };

    useEffect(() => {
        let args = '';
        if (startDate && endDate) {
            const s = `startDate=${startDate.toISOString().split('T')[0]}`;
            const e = `endDate=${endDate.toISOString().split('T')[0]}`;
            args += `${s}&${e}`;
        }
        if (timeFilter == 'LATEST' || timeFilter == 'OLDEST') {
            args += `${args ? '&' : ''}sortBy=${timeFilter}`;
        }
        if (statusFilter == 'COMPLETED' || statusFilter == 'READY') {
            args += `${args ? '&' : ''}status=${statusFilter}`;
        }
        setFilterArgs(args);
    }, [title, startDate, endDate, timeFilter, statusFilter]);

    const fetchGetQuestions =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByUserId(
                      getCookie('userId'),
                      'sortBy=LATEST',
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
                      'sortBy=LATEST',
                      getCookie('accessToken'),
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

    // 게시판 전체 질문, 답변 대기 질문, 답변 완료 질문 현황 계산 (고정되도록 수정 필요)
    useEffect(() => {
        const q = questionCount.totalQuestionCount;
        const a = answerCount.length;
        setTotalItems(q);
        setReadyItems(q - a);
        setCompletedItems(a);
    }, [questionCount, answerCount]);

    // 질문 제목과 고객 이름 기준 검색
    const filterByTitleAndCustomerName = (questions) => {
        if (!title && !customerName) return questions;
        return questions.filter((question) => {
            const titleMatch = title
                ? question.title.toLowerCase().includes(title.toLowerCase())
                : true;
            const customerNameMatch = customerName
                ? question.customerName
                      .toLowerCase()
                      .includes(customerName.toLowerCase())
                : true;
            return titleMatch && customerNameMatch;
        });
    };

    const inqQuestions = filterByTitleAndCustomerName(
        questionSummary.inqQuestions || [],
    );
    const siteQuestions = filterByTitleAndCustomerName(
        questionSummary.siteQuestions || [],
    );
    const etcQuestions = filterByTitleAndCustomerName(
        questionSummary.etcQuestions || [],
    );

    // Voc번호로 사용할 시분초
    const calDateNo = (datetime) => {
        const [, timePart] = datetime.split('T');
        const [hours, minutes, seconds] = timePart.split(':');
        return `${hours}${minutes}${seconds}`;
    };

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
                                    setStatus(inq.status);
                                    setOpenCard(true);
                                }}
                                status={inq.status}
                                vocNo={
                                    getCookie('userId') +
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
                                    setStatus(site.status);
                                    setOpenCard(true);
                                }}
                                status={site.status}
                                vocNo={
                                    getCookie('userId') +
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
                                    setStatus(etc.status);
                                    setOpenCard(true);
                                }}
                                status={etc.status}
                                vocNo={
                                    getCookie('userId') +
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
                    status={status}
                    setStatus={setStatus}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default QuestionCardList;

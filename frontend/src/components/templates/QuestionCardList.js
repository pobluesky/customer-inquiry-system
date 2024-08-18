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
    startDate,
    endDate,
    filter,
    searchByTitle,
}) {
    const [filterArgs, setFilterArgs] = useState('');
    const [questionSummary, setQuestionSummary] = useState({});
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
            args = `${s}&${e}`;
        } else if (filter) {
            switch (filter) {
                case 'latest':
                case 'oldest':
                    args = `sortBy=${filter}`;
                    break;
                case 'COMPLETED':
                case 'READY':
                    args = `status=${filter}`;
                    break;
                default:
                    break;
            }
        }
        setFilterArgs(args);
    }, [startDate, endDate, filter]);

    const fetchGetQuestions =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByUserId(
                      getCookie('userId'),
                      getCookie('accessToken'),
                      filterArgs,
                  );
                  if (result) {
                      setQuestionSummary(result);
                  } else {
                      setQuestionSummary([]);
                  }
              }
            : async () => {
                  const result = await getAllQuestion(getCookie('accessToken'));
                  if (result) {
                      setQuestionSummary(result);
                  } else {
                      setQuestionSummary([]);
                  }
              };

    useEffect(() => {
        fetchGetQuestions();
    }, [startDate, endDate, filterArgs, openCard]);

    const filterByTitle = (questions) => {
        if (!searchByTitle) return questions;
        return questions.filter((question) =>
            question.title.toLowerCase().includes(searchByTitle.toLowerCase()),
        );
    };

    const inqQuestions = filterByTitle(questionSummary.inqQuestions || []);
    const siteQuestions = filterByTitle(questionSummary.siteQuestions || []);
    const etcQuestions = filterByTitle(questionSummary.etcQuestions || []);

    // 전체 게시글 개수
    useEffect(() => {
        const total = Object.values(questionSummary).reduce(
            (acc, questions) => acc + (questions?.length || 0),
            0,
        );

        setTotalItems(total);
    }, [questionSummary, searchByTitle]);

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

import React, { useState } from 'react';
import Tag from '../atoms/Tag';
import QuestionCard from '../mocules/QuestionCard';
import QuestionModal from '../organisms/QuestionModal';
import {
    Question_Doesnt_Exist,
    Question_Card_List,
} from '../../assets/css/Voc.css';

const QuestionDoesntExist = () => {
    return <div className={Question_Doesnt_Exist}>아직 문의가 없습니다.</div>;
};

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

function QuestionCardList({ questionSummary }) {
    const [openCard, setOpenCard] = useState(false);
    const [questionId, setQuestionId] = useState(0);
    const [status, setStatus] = useState('ready');

    const closeModal = () => {
        setOpenCard(false);
    };

    const inqQuestions = questionSummary.inqQuestions || [];
    const siteQuestions = questionSummary.siteQuestions || [];
    const etcQuestions = questionSummary.etcQuestions || [];

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
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default QuestionCardList;

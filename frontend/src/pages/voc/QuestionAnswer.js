import React, { useEffect, useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import CustomerQuestionReport from '../../components/organisms/CustomerQuestionReport';
import CustomerQuestionSearchItem from '../../components/organisms/CustomerQuestionSearchItem';
import CustomerQuestionList from '../../components/templates/CustomerQuestionList';
import Notification from '../../components/mocules/Notification';
import { Question_Title } from '../../assets/css/Voc.css';

import { getAnswerAndQuestionByCustomerId } from '../../apis/api/answer/answer';

function QuestionAnswer() {
    // N번 고객으로 테스트
    const [dataList, setDataList] = useState([]);
    const customerId = 1;
    const token = process.env.REACT_APP_JWT_TOKEN;

    useEffect(() => {
        const fetchGetAnswer = async () => {
            const result = await getAnswerAndQuestionByCustomerId(customerId, token);

            if (Array.isArray(result)) {
                setDataList(result);
            } else {
                console.error('Fetched data is not an array or is invalid.');
                setDataList([]);
            }
        };
        fetchGetAnswer();
    }, [customerId]);

    // 답변 대기, 답변 완료, 전체 질문 개수
    const readyItems = dataList.filter((data) => data.question.status === 'READY').length;
    const completedItems = dataList.filter((data) => data.question.status === 'COMPLETED').length;
    const totalItems = readyItems + completedItems;

    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <Path largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <CustomerQuestionReport question_total={totalItems} question_ready={readyItems} question_completed={completedItems} />
            <CustomerQuestionSearchItem totalItems={totalItems}/>
            <div className={Question_Title}>문의 목록</div>
            <CustomerQuestionList dataList={dataList} />
            <Notification />
        </>
    );
}

export default QuestionAnswer;

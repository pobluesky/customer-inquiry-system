import React, { useEffect, useState } from 'react';
import Header from '../../components/mocules/Header';
import VocPath from '../../components/atoms/VocPath';
import ManagerQuestionReport from '../../components/organisms/ManagerQuestionReport';
import ManagerQuestionSearchItem from '../../components/organisms/ManagerQuestionSearchItem';
import ManagerQuestionList from '../../components/templates/ManagerQuestionList';
import Notification from '../../components/mocules/Notification';
import { Question_Title } from '../../assets/css/Voc.css';

import { getAnswerAndQuestionByuserId } from '../../apis/api/answer/answer';

function QuestionAnswer() {
    // 고객 관점
    // N번 고객으로 테스트
    const [dataList, setDataList] = useState([]);
    const userId = 1;
    const token = process.env.REACT_APP_JWT_TOKEN;

    useEffect(() => {
        const fetchGetAnswer = async () => {
            const result = await getAnswerAndQuestionByuserId(userId, token);

            if (Array.isArray(result)) {
                setDataList(result);
            } else {
                console.error('Fetched data is not an array or is invalid.');
                setDataList([]);
            }
        };
        fetchGetAnswer();
    }, [userId]);

    // 답변 대기, 답변 완료, 전체 질문 개수
    const readyItems = dataList.filter((data) => data.question.status === 'READY').length;
    const completedItems = dataList.filter((data) => data.question.status === 'COMPLETED').length;
    const totalItems = readyItems + completedItems;

    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <ManagerQuestionReport question_total={totalItems} question_ready={readyItems} question_completed={completedItems} />
            <ManagerQuestionSearchItem totalItems={totalItems}/>
            <div className={Question_Title}>문의 목록</div>
            <ManagerQuestionList dataList={dataList} />
            <Notification />
        </>
    );
}

export default QuestionAnswer;

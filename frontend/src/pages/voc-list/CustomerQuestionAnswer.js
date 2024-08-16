import React, { useEffect, useState } from 'react';
import CustomerQuestionReport from '../../components/organisms/CustomerQuestionReport';
import CustomerQuestionSearchItem from '../../components/organisms/CustomerQuestionSearchItem';
import CustomerQuestionList from '../../components/templates/CustomerQuestionList';
import Notification from '../../components/mocules/Notification';
import { Question_Title } from '../../assets/css/Voc.css';

import { getAnswerAndQuestionByuserId } from '../../apis/api/answer';
import { getCookie } from '../../apis/utils/cookies';

function CustomerQuestionAnswer() {
    const [dataList, setDataList] = useState([]);
    const userId = 1;

    if (getCookie('accessToken')) {
        console.log('getCookie를 통해 토큰을 성공적으로 가져왔습니다.');
    }

    useEffect(() => {
        console.log('질문 및 답변 리스트를 요청하는 API가 호출되었습니다.');
        const fetchGetAnswer = async () => {
            const result = await getAnswerAndQuestionByuserId(
                userId,
                getCookie('accessToken'),
            );
            if (result) {
                console.log('응답받은 데이터는 다음과 같습니다.', result);
            }
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
    const readyItems = dataList.filter(
        (data) => data.question.status === 'READY',
    ).length;
    const completedItems = dataList.filter(
        (data) => data.question.status === 'COMPLETED',
    ).length;
    const totalItems = readyItems + completedItems;

    return (
        <>
            <CustomerQuestionReport
                question_total={totalItems}
                question_ready={readyItems}
                question_completed={completedItems}
            />
            <CustomerQuestionSearchItem totalItems={totalItems} />
            <div className={Question_Title}>문의 목록</div>
            <CustomerQuestionList dataList={dataList} />
            {/* <Notification /> */}
        </>
    );
}

export default CustomerQuestionAnswer;
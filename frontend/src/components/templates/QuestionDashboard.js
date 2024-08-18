import React, { useEffect, useState } from 'react';
import Text from '../../components/atoms/Text';
import QuestionOverview from '../mocules/QuestionOverview';
import QuestionFilterPanel from '../organisms/QuestionFilterPanel';
import QuestionCardList from '../../components/templates/QuestionCardList';
// import Notification from '../../components/mocules/NotificationModal';
import { getCookie } from '../../apis/utils/cookies';
import { getAllQuestion } from '../../apis/api/question';

function QuestionDashboard() {
    const [questionSummary, setQuestionSummary] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    if (getCookie('accessToken')) {
        console.log('getCookie를 통해 토큰을 성공적으로 가져왔습니다.');
    }

    const fetchGetAllQuestions = async () => {
        const result = await getAllQuestion(getCookie('accessToken'));
        if (result) {
            console.log('응답받은 데이터는 다음과 같습니다.', result);
            setQuestionSummary(result);
        } else {
            console.error('Fetched data is not an array or is invalid.');
            setQuestionSummary([]);
        }
    };

    useEffect(() => {
        fetchGetAllQuestions();
    }, []);

    // 답변 대기, 답변 완료, 전체 질문 개수
    // const readyItems = dataList.filter(
    //     (data) => data.question.status === 'READY',
    // ).length;
    // const completedItems = dataList.filter(
    //     (data) => data.question.status === 'COMPLETED',
    // ).length;
    // const totalItems = readyItems + completedItems;

    const totalItems = 99;
    const readyItems = 99;
    const completedItems = 99;

    return (
        <>
            <QuestionOverview
                question_total={totalItems}
                question_ready={readyItems}
                question_completed={completedItems}
                question_collaboration={'99'}
            />
            <QuestionFilterPanel
                totalItems={totalItems}
                startDate={startDate}
                setStartDate={setStartDate}
            />
            <Text
                name={'문의 목록'}
                width={'1320px'}
                margin={'24px auto 24px auto'}
                fontSize={'24px'}
                fontWeight={'600'}
                textColor={'#49454f'}
            />
            {questionSummary && <QuestionCardList questionSummary={questionSummary} />}
            {/* <Notification /> */}
        </>
    );
}

export default QuestionDashboard;

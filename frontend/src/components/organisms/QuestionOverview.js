import React from 'react';
import total from '../../assets/css/icons/voc/question_total.svg';
import ready from '../../assets/css/icons/voc/question_ready.svg';
import completed from '../../assets/css/icons/voc/question_completed.svg';
import partition from '../../assets/css/icons/voc/question_partition.svg';
import collaboration from '../../assets/css/icons/voc/question_collaboration.svg';
import { Question_Overview } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

function QuestionOverview({ questionCount, answerCount, colCount }) {
    const thisRole = getCookie('userRole');
    const gridTemplateColumns =
        thisRole === 'customer'
            ? // ? '360px 120px 360px 120px 360px' // isCustomer
              // : '228px 96px 228px 96px 228px 96px 228px'; // isManager
              '400px 400px 400px' // isCustomer
            : '300px 300px 300px 300px'; // isManager

    return (
        <div className={Question_Overview}>
            <div style={{ gridTemplateColumns }}>
                <div>
                    <div>전체 문의</div>
                    <div>{questionCount || ''}건</div>
                </div>
                <div>
                    <div>답변 대기</div>
                    <div>
                        {questionCount - answerCount < 0
                            ? ''
                            : questionCount - answerCount}건
                    </div>
                </div>
                <div>
                    <div>답변 완료</div>
                    <div>{answerCount || ''}건</div>
                </div>
                {thisRole !== 'customer' && (
                    <>
                        <div>
                            <div>협업</div>
                            <div>{colCount || 0}건</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default QuestionOverview;

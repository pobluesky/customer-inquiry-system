import React from 'react';
import total from '../../assets/css/icons/voc/question_total.svg';
import ready from '../../assets/css/icons/voc/question_ready.svg';
import completed from '../../assets/css/icons/voc/question_completed.svg';
import partition from '../../assets/css/icons/voc/question_partition.svg';
import collaboration from '../../assets/css/icons/voc/question_collaboration.svg';
import { Question_Overview } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

function QuestionOverview({
    questionCount,
    answerCount,
    colCount,
}) {
    const thisRole = getCookie('userRole');
    const gridTemplateColumns =
        thisRole === 'CUSTOMER'
            ? '360px 120px 360px 120px 360px' // isCustomer
            : '240px 96px 240px 96px 240px 96px 240px'; // isManager

    return (
        <div className={Question_Overview}>
            <div style={{ gridTemplateColumns }}>
                <div>
                    <img src={total} />
                    <div>전체 문의</div>
                    <div>{questionCount || 0}</div>
                </div>

                <img src={partition} />

                <div>
                    <img src={ready} />
                    <div>답변 대기</div>
                    <div>{questionCount-answerCount || 0}</div>
                </div>

                <img src={partition} />

                <div>
                    <img src={completed} />
                    <div>답변 완료</div>
                    <div>{answerCount || ''}</div>
                </div>
                {thisRole !== 'CUSTOMER' && (
                    <>
                        <img src={partition} />

                        <div>
                            <img src={collaboration} />
                            <div>협업</div>
                            <div>{colCount || 0}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default QuestionOverview;

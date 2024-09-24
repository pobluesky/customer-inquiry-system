import React from 'react';
import total from '../../assets/css/icons/count-total.svg';
import ready from '../../assets/css/icons/count-ready.svg';
import completed from '../../assets/css/icons/count-completed.svg';
import collaboration from '../../assets/css/icons/count-collaboration.svg';
import { getCookie } from '../../apis/utils/cookies';
import { Voc_Overview } from '../../assets/css/Voc.css';

function VocOverview({ questionCount, answerCount, colCount }) {
    const role = getCookie('userRole');

    return (
        <div className={Voc_Overview}>
            <div>
                <div>
                    <img src={total} />
                </div>
                <div>
                    <img src={ready} />
                </div>
                <div>
                    <img src={completed} />
                </div>
                {role !== 'customer' && (
                    <div>
                        <img src={collaboration} />
                    </div>
                )}
            </div>
            <div>
                <div>
                    전체 문의 <span>{questionCount || 0}</span>건
                </div>
                <div>
                    답변 대기
                    <span>
                        {questionCount && answerCount
                            ? questionCount - answerCount
                            : 0}
                    </span>
                    건
                </div>
                <div>
                    답변 완료 <span>{answerCount || 0}</span>건
                </div>
                {role !== 'customer' && (
                    <div>
                        협업 <span>{colCount || 0}</span>건
                    </div>
                )}
            </div>
        </div>
    );
}

export default VocOverview;

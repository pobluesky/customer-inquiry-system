import React from 'react';
import total from '../../assets/css/icons/voc/question_total.svg';
import ready from '../../assets/css/icons/voc/question_ready.svg';
import completed from '../../assets/css/icons/voc/question_completed.svg';
import partition from '../../assets/css/icons/voc/question_partition.svg';
import { Report_Container } from '../../assets/css/Voc.css';

function QuestionReport({ question_total, question_ready, question_completed }) {
    return (
        <div className={Report_Container}>
            <div> 
                <div>
                    <img src={total} />
                    <div>전체 문의</div>
                    <div>{question_total}</div>
                </div>

                <img src={partition} />

                <div>
                    <img src={ready} />
                    <div>답변 대기 문의</div>
                    <div>{question_ready}</div>
                </div>

                <img src={partition} />

                <div>
                    <img src={completed} />
                    <div>답변 완료 문의</div>
                    <div>{question_completed}</div>
                </div>
            </div>
        </div>
    );
}

export default QuestionReport;

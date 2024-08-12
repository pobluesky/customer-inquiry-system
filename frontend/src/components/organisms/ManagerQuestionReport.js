import React from 'react';
import total from '../../assets/css/icons/voc/question_total.svg';
import ready from '../../assets/css/icons/voc/question_ready.svg';
import completed from '../../assets/css/icons/voc/question_completed.svg';
import partition from '../../assets/css/icons/voc/question_partition.svg';
import collaboration from '../../assets/css/icons/voc/question_collaboration.svg';
import { Manager_Question_Report } from '../../assets/css/Voc.css';

// function ManagerQuestionReport({
//     question_total,
//     question_ready,
//     question_completed,
//     question_collaboration
// }) {
function ManagerQuestionReport({
}) {
    const question_total = 1;
    const question_ready = 1;
    const question_completed = 1;
    const question_collaboration = 1
return (
        <div className={Manager_Question_Report}>
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

                <img src={partition} />

                <div>
                    <img src={collaboration} />
                    <div>협업</div>
                    <div>{question_collaboration}</div>
                </div>
            </div>
        </div>
    );
}

export default ManagerQuestionReport;

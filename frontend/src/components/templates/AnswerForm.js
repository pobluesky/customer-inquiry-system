import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import AnswerInput from '../organisms/AnswerInput';

export default function AnswerForm() {
    const { questionId } = useParams();
    const colPossible = JSON.parse(localStorage.getItem('colPossible'));

    return (
        <div>
            <QuestionViewer questionId={questionId} />
            <AnswerInput questionId={questionId} colPossible={colPossible} />
        </div>
    );
}

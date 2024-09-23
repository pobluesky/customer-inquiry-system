import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import AnswerInput from '../organisms/AnswerInput';

export default function AnswerForm() {
    const location = useLocation();
    const { questionId, colPossible } = location.state;

    return (
        <div>
            <QuestionViewer questionId={questionId} />
            <AnswerInput questionId={questionId} colPossible={colPossible} />
        </div>
    );
}

import React from 'react';
import QuestionTypeSelector from '../mocules/QuestionTypeSelector';
import QuestionInput from '../mocules/QuestionInput';

function QuestionForm() {
    return (
        <>
            <QuestionTypeSelector />
            <QuestionInput />
        </>
    );
}

export default QuestionForm;

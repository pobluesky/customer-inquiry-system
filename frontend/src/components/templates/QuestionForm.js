import React from 'react';
import QuestionInput from './../mocules/QuestionInput';
import QuestionTypeSelector from './../mocules/QuestionTypeSelector';

function QuestionForm() {
    return (
        <div>
            <>
                <QuestionTypeSelector />
                <QuestionInput />
            </>
        </div>
    );
}

export default QuestionForm;
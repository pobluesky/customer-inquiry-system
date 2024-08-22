import React, { useState } from 'react';
import QuestionInput from './../mocules/QuestionInput';
import QuestionTypeSelector from './../mocules/QuestionTypeSelector';
import QuestionInquirySearchModal from '../mocules/QuestoinInquirySearchModal';

function QuestionForm() {
    const [selectedType, setSelectedType] = useState('INQ'); // type 상태 관리

    return (
        <div>
            <QuestionTypeSelector
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <QuestionInput selectedType={selectedType} />
            <QuestionInquirySearchModal />
        </div>
    );
}

export default QuestionForm;

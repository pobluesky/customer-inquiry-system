import React, { useState } from 'react';
import QuestionInput from '../organisms/QuestionInput';
import QuestionTypeSelector from '../organisms/QuestionTypeSelector';
import QuestionInquirySearchModal from '../molecules/QuestionInquirySearchModal';

function QuestionForm({ questionDetail }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedType, setSelectedType] = useState(
        questionDetail?.type || 'INQ',
    );
    const [inquiryId, setInquiryId] = useState(questionDetail?.inquiryId || '');

    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div>
            <QuestionTypeSelector
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                setOpenModal={setOpenModal}
                inquiryId={inquiryId}
            />
            <QuestionInput
                selectedType={selectedType}
                inquiryId={inquiryId}
                questionDetail={questionDetail}
            />
            {openModal && (
                <QuestionInquirySearchModal
                    setInquiryId={setInquiryId}
                    inquiryId={inquiryId}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                />
            )}
        </div>
    );
}

export default QuestionForm;

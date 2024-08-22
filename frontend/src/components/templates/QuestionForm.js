import React, { useState } from 'react';
import QuestionInput from './../mocules/QuestionInput';
import QuestionTypeSelector from './../mocules/QuestionTypeSelector';
import QuestionInquirySearchModal from '../mocules/QuestoinInquirySearchModal';

function QuestionForm() {
    const [openModal, setOpenModal] = useState(false); // 모달창 상태 관리
    const [selectedType, setSelectedType] = useState('INQ'); // type 상태 관리
    const [inquiryId, setInquiryId] = useState(''); // Inquiry Id 상태 관리

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
            <QuestionInput selectedType={selectedType} inquiryId={inquiryId} />
            {openModal && (
                <QuestionInquirySearchModal
                    setInquiryId={setInquiryId}
                    setOpenModal={setOpenModal}
                />
            )}
        </div>
    );
}

export default QuestionForm;

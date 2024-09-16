import React, { useState } from 'react';
import QuestionInput from '../organisms/QuestionInput';
import QuestionTypeSelector from '../organisms/QuestionTypeSelector';
import QuestionInquirySearchModal from '../molecules/QuestoinInquirySearchModal';

function QuestionForm({ questionDetail }) {
    const [openModal, setOpenModal] = useState(false); // 모달창 상태 관리
    const [selectedType, setSelectedType] = useState(questionDetail?.type || 'INQ'); // type 상태 관리
    const [inquiryId, setInquiryId] = useState(questionDetail?.inquiryId || ''); // Inquiry Id 상태 관리

    // 고객사 Inquiry 조회 Modal
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
            <QuestionInput selectedType={selectedType} inquiryId={inquiryId} questionDetail={questionDetail} />
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

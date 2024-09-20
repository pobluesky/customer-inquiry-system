import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import ColFindManagerButton from '../organisms/ColFindManagerButton';
import ColFindManagerModal from '../molecules/ColFindManagerModal';
import ColReqInput from '../organisms/ColReqInput';

export default function ColForm() {
    const location = useLocation();
    const { questionDetail } = location.state;

    const [openModal, setOpenModal] = useState(false);
    const [colResId, setColResId] = useState('');
    const [colResManagerName, setColResManagerName] = useState('');
    const [colResManagerDept, setColResManagerDept] = useState('');

    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <ColFindManagerButton
                setOpenModal={setOpenModal}
                colResManagerName={colResManagerName}
                colResManagerDept={colResManagerDept}
            />
            <ColReqInput colResId={colResId} questionDetail={questionDetail} />
            {openModal && (
                <ColFindManagerModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setColResId={setColResId}
                    setColResManagerName={setColResManagerName}
                    setColResManagerDept={setColResManagerDept}
                />
            )}
        </div>
    );
}

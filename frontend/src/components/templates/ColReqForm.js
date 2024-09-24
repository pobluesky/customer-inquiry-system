import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import ColFindManagerButton from '../organisms/ColFindManagerButton';
import ColFindManagerModal from '../molecules/ColFindManagerModal';
import ColReqInput from '../organisms/ColReqInput';

export default function ColReqForm() {
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, []);

    const location = useLocation();
    const { questionDetail, colDetail } = location.state;

    const [openModal, setOpenModal] = useState(false);
    const [colResId, setColResId] = useState('');
    const [colResManagerName, setColResManagerName] = useState('');
    const [colResManagerDept, setColResManagerDept] = useState('');

    if (openModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <ColFindManagerButton
                setOpenModal={setOpenModal}
                colResManagerName={colResManagerName}
                colResManagerDept={colResManagerDept}
                colDetail={colDetail}
            />
            <ColReqInput
                colResId={colResId}
                colDetail={colDetail}
                questionDetail={questionDetail}
                colResManagerName={colResManagerName}
                colResManagerDept={colResManagerDept}
            />
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

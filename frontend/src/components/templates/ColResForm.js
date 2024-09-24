import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import ColReqViewer from '../organisms/ColReqViewer';
import ColResInput from '../organisms/ColResInput';
import ColResViewer from '../organisms/ColResViewer';
import { getCookie } from '../../apis/utils/cookies';

export default function ColResForm() {
    const role = getCookie('userRole');

    const location = useLocation();
    const { questionDetail } = location.state;
    const initialColDetail = location.state?.colDetail;

    const [colDetail, setColDetail] = useState(() => {
        const savedColDetail = localStorage.getItem('colDetail');
        return savedColDetail ? JSON.parse(savedColDetail) : initialColDetail;
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }, []);

    useEffect(() => {
        if (colDetail) {
            localStorage.setItem('colDetail', JSON.stringify(colDetail));
        }
    }, [colDetail]);

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <ColReqViewer
                colDetail={colDetail}
                questionDetail={questionDetail}
            />
            {colDetail.colStatus !== 'READY' && !editMode ? (
                <ColResViewer
                    colDetail={colDetail}
                    setEditMode={setEditMode}
                    setColDetail={setColDetail}
                />
            ) : role === 'quality' ? (
                <ColResInput
                    colDetail={colDetail}
                    setColDetail={setColDetail}
                />
            ) : (
                ''
            )}
        </div>
    );
}

import React, { useState } from 'react';
import ColFilterPanel from '../organisms/ColFilterPannel';
import ColTable from '../mocules/ColTable';
import ColRequestModal from '../mocules/ColRequestModal';

export default function ColForm() {
    const [status, setStatus] = useState('READY');
    const [openModal, setOpenModal] = useState(false);
    const [questionId, setQuestionId] = useState('');
    const [colId, setColId] = useState('');
    const [colDetail, setColDetail] = useState([]);

    return (
        <>
            <ColFilterPanel />
            <ColTable
                setOpenModal={setOpenModal}
                setColDetail={setColDetail}
                setStatus={setStatus}
                status={status}
                setQuestionId={setQuestionId}
                setColId={setColId}
            />
            {openModal && (
                <ColRequestModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    setStatus={setStatus}
                    colDetail={colDetail}
                    status={status}
                    questionId={questionId}
                    colId={colId}
                />
            )}
        </>
    );
}

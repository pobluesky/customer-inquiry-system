import React, { useState } from 'react';
import ColFilterPanel from '../organisms/ColFilterPannel';
import ColTable from '../mocules/ColTable';
import ColRequestModal from '../mocules/ColRequestModal';

export default function ColForm() {
    const [status, setStatus] = useState('READY');
    const [openModal, setOpenModal] = useState(false);
    const [questionId, setQuestionId] = useState('');
    const [colId, setColId] = useState('');
    const [height, setHeight] = useState('');
    const [auth, setAuth] = useState(true);
    const [colDetail, setColDetail] = useState([]);
    const [selectedTimeFilter, setSelectedTimeFilter] = useState('LATEST'); // Added state

    return (
        <>
            <ColFilterPanel />
            <ColTable
                setQuestionId={setQuestionId}
                setColId={setColId}
                setStatus={setStatus}
                status={status}
                setAuth={setAuth}
                setColDetail={setColDetail}
                setHeight={setHeight}
                setOpenModal={setOpenModal}
            />
            {openModal && (
                <ColRequestModal
                    questionId={questionId}
                    colId={colId}
                    setStatus={setStatus}
                    status={status}
                    setHeight={setHeight}
                    height={height}
                    auth={auth}
                    colDetail={colDetail}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                />
            )}
        </>
    );
}

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

    const [searchedItems, setSearchedItems] = useState('');

    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    const [colNo, setColNo] = useState('');
    const [colManager, setColManager] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // const [searchStartDate, setSearchStartDate] = useState('');
    // const [searchEndDate, setSearchEndDate] = useState('');
    const [searchColNo, setSearchColNo] = useState('');
    const [searchColManager, setSearchColManager] = useState('');
    const [searchTimeFilter, setSearchTimeFilter] = useState('');
    const [searchStatusFilter, setSearchStatusFilter] = useState('');

    // 검색 기준 적용
    const searchByFilter = () => {
        setSearchColNo(colNo);
        setSearchColManager(colManager);
        // setSearchStartDate(startDate);
        // setSearchEndDate(endDate);
        setSearchTimeFilter(timeFilter);
        setSearchStatusFilter(statusFilter);
    };

    return (
        <>
            <ColFilterPanel
                searchedItems={searchedItems}
                colNo={colNo}
                setColNo={setColNo}
                colManager={colManager}
                setColManager={setColManager}
                // startDate={startDate}
                // endDate={endDate}
                timeFilter={timeFilter}
                setTimeFilter={setTimeFilter}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                searchByFilter={searchByFilter}
            />
            <ColTable
                setSearchedItems={setSearchedItems}
                colNo={searchColNo}
                colManager={searchColManager}
                // startDate={searchStartDate}
                // endDate={searchEndDate}
                timeFilter={searchTimeFilter}
                statusFilter={searchStatusFilter}

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

import React, { useEffect, useState } from 'react';
import ColStatus from '../molecules/ColStatus';
import ColCreatedDate from '../molecules/ColCreatedDate';
import { getQuestionByQuestionIdForManager } from '../../apis/api/question';
import {
    getAllCollaboration,
    getCollaborationDetail,
} from '../../apis/api/collaboration';
import { Col_Table } from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function ColTable({
    colNo,
    colManager,
    setSearchCount,
    status,
}) {
    const navigate = useNavigate();
    const { userId } = useAuth();

    const [filterArgs, setFilterArgs] = useState('');
    const [collabs, setCollabs] = useState([]);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [progressFilter, setProgressFilter] = useState('');

    const validStatuses = ['READY', 'COMPLETE', 'INPROGRESS', 'REFUSE'];

    const fetchGetCol = async (filterArgs) => {
        try {
            const response = await getAllCollaboration(filterArgs);
            setCollabs(response.data.colListInfo);
            setSearchCount(response.data.colListInfo.length);
        } catch (error) {
            console.error('협업 요약 조회 실패: ', error);
        }
    };

    const fetchGetColDetail = async (questionId, colId) => {
        try {
            const responseC = await getCollaborationDetail(questionId, colId);
            const responseQ = await getQuestionByQuestionIdForManager(
                responseC.data?.questionId,
            );
            localStorage.setItem(
                `questionDetail-${questionId}`,
                JSON.stringify(responseQ.data),
            );
            navigate('/voc-form/collaboration/res', {
                state: {
                    colDetail: responseC.data,
                    questionDetail: responseQ.data,
                },
            });
        } catch (error) {
            console.error('협업 상세 조회 또는 질문 상세 조회 실패: ', error);
        }
    };

    useEffect(() => {
        let args = '';
        if (colNo) {
            args += `${args ? '&' : ''}colReqId=${colNo}`;
        }
        if (colManager) {
            args += `${args ? '&' : ''}colReqManager=${colManager}`;
        }
        if (startDate && endDate) {
            const s = `startDate=${
                new Date(startDate).toISOString().split('T')[0]
            }`;
            const e = `endDate=${
                new Date(endDate).toISOString().split('T')[0]
            }`;
            args += `${args ? '&' : ''}${s}&${e}`;
        }
        if (timeFilter == 'LATEST' || timeFilter == 'OLDEST') {
            args += `${args ? '&' : ''}sortBy=${timeFilter}`;
        }
        if (validStatuses.includes(progressFilter)) {
            args += `${args ? '&' : ''}colStatus=${progressFilter}`;
        }
        setFilterArgs(args);
    }, [colNo, colManager, startDate, endDate, timeFilter, progressFilter]);

    const progressBackgroundColor = (status) => {
        switch (status) {
            case 'COMPLETE':
                return '#DBEDDB'; // 협업 완료
            case 'READY':
                return '#F5E0E9'; // 협업 대기
            case 'REFUSE':
                return '#EFEFEE'; // 협업 거절
            case 'INPROGRESS':
                return '#D3E5EF'; // 협업 진행 중
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'READY':
                return '협업 대기';
            case 'REFUSE':
                return '협업 거절';
            case 'COMPLETE':
                return '협업 완료';
            case 'INPROGRESS':
                return '협업 진행 중';
        }
    };

    useEffect(() => {
        fetchGetCol(filterArgs);
    }, [userId, filterArgs, status]);

    const [openStatus, setOpenStatus] = useState(false);
    const [openDate, setOpenDate] = useState(false);

    // 협업 번호, 요청 담당자
    return (
        <>
            <table className={Col_Table}>
                <thead>
                    <tr>
                        <th>협업 번호</th>
                        <th>요청 담당자</th>
                        <th>요청 사유</th>
                        <th
                            onClick={() => {
                                setOpenStatus(!openStatus);
                            }}
                        >
                            협업 상태
                            {openStatus ? (
                                <ColStatus
                                    setProgressFilter={setProgressFilter}
                                />
                            ) : (
                                ''
                            )}
                        </th>
                        <th
                            onClick={() => {
                                setOpenDate(!openDate);
                            }}
                        >
                            요청일
                            {openDate ? (
                                <ColCreatedDate
                                    setTimeFilter={setTimeFilter}
                                    startDate={startDate}
                                    setStartDate={setStartDate}
                                    endDate={endDate}
                                    setEndDate={setEndDate}
                                />
                            ) : (
                                ''
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {collabs.map((col, idx) => (
                        <tr
                            key={idx}
                            onClick={() => {
                                fetchGetColDetail(col.questionId, col.colId);
                            }}
                        >
                            <td>{col.colId}</td>
                            <td>{col.colReqManager}</td>
                            <td>
                                {col.colContents.replace(/<\/?[^>]+(>|$)/g, '')}
                            </td>
                            <td>
                                <div
                                    style={{
                                        backgroundColor:
                                            progressBackgroundColor(
                                                col.colStatus,
                                            ),
                                    }}
                                >
                                    {getStatusLabel(col.colStatus)}
                                </div>
                            </td>
                            <td>{col.createdDate.substring(0, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

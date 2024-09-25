import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ColOverview from '../organisms/VocOverview';
import ColSearchInput from '../organisms/ColSearchInput';
import ColTable from '../organisms/ColTable';
import { getCookie } from '../../apis/utils/cookies';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import { getAllAnswer, getAnswerByUserId } from '../../apis/api/answer';
import { getAllCollaboration } from '../../apis/api/collaboration';
import { Voc_Dashboard } from '../../assets/css/Voc.css';

export default function ColDashboard() {
    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const [questionCount, setQuestionCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [colCount, setColCount] = useState(0);
    const [searchCount, setSearchCount] = useState(0);

    const [colNo, setColNo] = useState('');
    const [colReqManager, setColReqManager] = useState('');
    const [colResManager, setColResManager] = useState('');

    const [filterArgs, setFilterArgs] = useState('');
    const [collabs, setCollabs] = useState([]);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [timeFilter, setTimeFilter] = useState('');

    const [colReqFilter, setColReqFilter] = useState('');
    const [colResFilter, setColResFilter] = useState('');
    const [progressFilter, setProgressFilter] = useState('');

    const validStatuses = ['READY', 'COMPLETE', 'INPROGRESS', 'REFUSE'];

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState('');

    const [isViewLoading, setViewLoading] = useState(true);
    const [isListLoading, setListLoading] = useState(true);

    const fetchGetQuestionCount =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getQuestionByUserId(userId, 0, '');
                      setQuestionCount(response.data.totalElements);
                  } catch (error) {
                      console.log('고객사 질문 개수 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllQuestion(0, '');
                      setQuestionCount(response.data.totalElements);
                  } catch (error) {
                      console.log('담당자 질문 개수 조회 실패: ', error);
                  }
              };

    const fetchGetAnswerCount =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getAnswerByUserId(userId, '');
                      setAnswerCount(response.data.length);
                  } catch (error) {
                      console.log('고객사 답변 개수 조회 실패: ', error);
                  } finally {
                      setViewLoading(false);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllAnswer();
                      setAnswerCount(response.data.length);
                  } catch (error) {
                      console.log('담당자 답변 개수 조회 실패: ', error);
                  } finally {
                      setViewLoading(false);
                  }
              };

    const fetchGetColCount = async () => {
        try {
            const response = await getAllCollaboration('');
            setColCount(response.data.totalElements);
        } catch (error) {
            console.log('협업 목록 개수 조회 실패: ', error);
        }
    };

    const fetchGetCol = async (filterArgs) => {
        try {
            const response = await getAllCollaboration(0, filterArgs);
            setCollabs(response.data.colListInfo);
            setTotalPages(response.data.totalPages);
            setSearchCount(response.data.colListInfo.length);
        } catch (error) {
            console.error('협업 요약 조회 실패: ', error);
        } finally {
            setListLoading(false);
        }
    };

    useEffect(() => {
        let args = '';
        if (colNo) {
            args += `${args ? '&' : ''}colId=${colNo}`;
        }
        if (colReqManager) {
            args += `${args ? '&' : ''}colReqManager=${colReqManager}`;
        }
        if (colResManager) {
            args += `${args ? '&' : ''}colResManager=${colResManager}`;
        }
        if (colReqFilter) {
            args += `${args ? '&' : ''}colReqId=${colReqFilter}`;
        }
        if (colResFilter) {
            args += `${args ? '&' : ''}colResId=${colResFilter}`;
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
        console.log(args);
    }, [
        colNo,
        colReqManager,
        colResManager,
        colReqFilter,
        colResFilter,
        startDate,
        endDate,
        timeFilter,
        progressFilter,
    ]);

    useEffect(() => {
        fetchGetQuestionCount();
        fetchGetAnswerCount();
        fetchGetColCount();
    }, [userId]);

    useEffect(() => {
        fetchGetCol(filterArgs);
    }, [userId, currentPage, filterArgs]);

    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
    }, []);

    return (
        <>
            {isViewLoading || isListLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                    }}
                    width={'100%'}
                    height={'65vh'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <ColOverview
                        questionCount={questionCount}
                        answerCount={answerCount}
                        colCount={colCount}
                    />
                    <ColSearchInput
                        setColNo={setColNo}
                        setColReqManager={setColReqManager}
                        setColResManager={setColResManager}
                    />
                    {searchCount ? (
                        <div className={Voc_Dashboard}>
                            검색 결과는 총 <span>{searchCount}</span>건입니다.
                        </div>
                    ) : (
                        <div className={Voc_Dashboard}>
                            검색 결과가 없습니다.
                        </div>
                    )}
                    <ColTable
                        collabs={collabs}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setTimeFilter={setTimeFilter}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        setColReqFilte={setColReqFilter}
                        setColResFilter={setColResFilter}
                        setProgressFilter={setProgressFilter}
                        // colNo={colNo}
                        // colReqManager={colReqManager}
                        // colResManager={colResManager}
                        // setSearchCount={setSearchCount}
                    />
                </>
            )}
        </>
    );
}

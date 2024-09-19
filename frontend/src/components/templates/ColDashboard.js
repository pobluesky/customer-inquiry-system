import React, { useEffect, useState } from 'react';
import ColOverview from '../organisms/VocOverview';
import ColSearchInput from '../organisms/ColSearchInput';
import ColTable from '../organisms/ColTable';
import ColResModal from '../molecules/ColResModal';
import { Voc_Dashboard } from '../../assets/css/Voc.css';
import { getAllQuestion, getQuestionByUserId } from '../../apis/api/question';
import { getAllAnswer, getAnswerByUserId } from '../../apis/api/answer';
import { getAllCollaboration } from '../../apis/api/collaboration';
import { getCookie } from '../../apis/utils/cookies';

export default function ColDashboard() {
    const [status, setStatus] = useState('READY');
    const [openModal, setOpenModal] = useState(false);
    const [questionId, setQuestionId] = useState('');
    const [colId, setColId] = useState('');
    const [height, setHeight] = useState('');
    const [auth, setAuth] = useState(true);
    const [colDetail, setColDetail] = useState([]);

    // 질문 답변 현황
    const userId = getCookie('userId');
    const role = getCookie('userRole');
    const [questionCount, setQuestionCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [colCount, setColCount] = useState(0);
    const [searchCount, setSearchCount] = useState(0);

    // 협업 번호, 협업 담당자 검색
    const [colNo, setColNo] = useState('');
    const [colManager, setColManager] = useState('');

    const fetchGetQuestionCount =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getQuestionByUserId(userId, '');
                      setQuestionCount(response.data.totalElements);
                  } catch (error) {
                      console.log('고객사 질문 개수 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getAllQuestion('');
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
                  }
              }
            : async () => {
                  try {
                      const response = await getAllAnswer();
                      setAnswerCount(response.data.length);
                  } catch (error) {
                      console.log('담당자 답변 개수 조회 실패: ', error);
                  }
              };

    const fetchGetColCount = async () => {
        try {
            const response = await getAllCollaboration('');
            setColCount(response.data.colListInfo.length);
        } catch (error) {
            console.log('협업 목록 개수 조회 실패: ', error);
        }
    };

    useEffect(() => {
        fetchGetQuestionCount();
        fetchGetAnswerCount();
        fetchGetColCount();
        localStorage.clear();
    }, [userId]);

    return (
        <>
            <ColOverview
                questionCount={questionCount}
                answerCount={answerCount}
                colCount={colCount}
            />
            <ColSearchInput setColNo={setColNo} setColManager={setColManager} />
            {searchCount ? (
                <div className={Voc_Dashboard}>
                    검색 결과는 총 <span>{searchCount}</span>건입니다.
                </div>
            ) : (
                <div className={Voc_Dashboard}>검색 결과가 없습니다.</div>
            )}
            <ColTable
                colNo={colNo}
                colManager={colManager}
                setSearchCount={setSearchCount}
                setQuestionId={setQuestionId}
                setColId={setColId}
                setStatus={setStatus}
                status={status}
                // 하단 삭제 예정
                setAuth={setAuth}
                setColDetail={setColDetail}
                setHeight={setHeight}
                setOpenModal={setOpenModal}
                // 상단 삭제 예정
            />
            {openModal && (
                <ColResModal
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

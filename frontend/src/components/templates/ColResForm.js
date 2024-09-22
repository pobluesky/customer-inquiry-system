import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';
import ColReqViewer from '../organisms/ColReqViewer';
import ColResInput from '../organisms/ColResInput';
import { getQuestionByQuestionIdForManager } from '../../apis/api/question';

export default function ColResForm() {
    const location = useLocation();
    const { colDetail } = location.state;

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
        fetchGetQuestionDetail();
    }, []);

    const [questionDetail, setQuestionDetail] = useState(
        JSON.parse(
            localStorage.getItem(`questionDetail-${colDetail?.questionId}`),
        ) || [],
    );

    // 질문 상세 조회
    const fetchGetQuestionDetail = async () => {
        try {
            const response = await getQuestionByQuestionIdForManager(
                colDetail?.questionId,
            );
            setQuestionDetail(response.data);
            localStorage.setItem(
                `questionDetail-${questionId}`,
                JSON.stringify(response.data),
            );
        } catch (error) {
            console.log('담당자 질문 상세 조회 실패: ', error);
        }
    };

    return (
        <div>
            <QuestionViewer questionDetail={questionDetail} />
            <ColReqViewer colDetail={colDetail} />
            <ColResInput colDetail={colDetail} />
        </div>
    );
}

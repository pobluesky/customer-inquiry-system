import React from 'react';
import { useLocation } from 'react-router-dom';
import VocPath from '../../components/atoms/VocPath';
import QuestionForm from '../../components/templates/QuestionForm';

export default function VocQuestionForm() {
    const location = useLocation();
    const { questionDetail } = location.state || '';

    return (
        <>
            <VocPath largeCategory={'문의'} mediumCategory={'문의 등록'} />
            <QuestionForm questionDetail={questionDetail} />
        </>
    );
}

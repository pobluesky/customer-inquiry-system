import React from 'react';
import VocPath from '../../components/atoms/VocPath';
import QuestionForm from '../../components/templates/QuestionForm';

export default function VocQuestionForm() {
    return (
        <>
            <VocPath largeCategory={'문의'} mediumCategory={'문의 등록'} />
            <QuestionForm />
        </>
    );
}

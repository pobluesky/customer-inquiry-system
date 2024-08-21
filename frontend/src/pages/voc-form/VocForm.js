import React from 'react';
import VocPath from './../../components/atoms/VocPath';
import QuestionForm from './../../components/organisms/QuestionForm';

function VocList() {
    return (
        <>
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 등록'} />
            <QuestionForm />
        </>
    );
}

export default VocList;

import React from 'react';
import VocPath from './../../components/atoms/VocPath';
import CustomerQuestionAnswer from './CustomerQuestionAnswer';

function VocList() {
    return (
        <>
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <CustomerQuestionAnswer />
        </>
    );
}

export default VocList;

import React from 'react';
import Header from '../../components/mocules/Header';
import VocPath from './../../components/atoms/VocPath';
import CustomerQuestionAnswer from './CustomerQuestionAnswer';

function VocList() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <CustomerQuestionAnswer />
        </>
    );
}

export default VocList;

import React from 'react';
import Header from '../../components/mocules/Header';
import VocPath from './../../components/atoms/VocPath';
import CustomerQuestionTypeSelectItem from '../../components/organisms/CustomerQuestionTypeSelectItem';
import CustomerQuestionContentItem from '../../components/organisms/CustomerQuestionContentItem';

function QuestionRegister() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <VocPath largeCategory={'VoC'} mediumCategory={'문의하기'} />
            <CustomerQuestionTypeSelectItem />
            <CustomerQuestionContentItem />
        </>
    );
}

export default QuestionRegister;

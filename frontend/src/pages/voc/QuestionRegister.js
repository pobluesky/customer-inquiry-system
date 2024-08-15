import React from 'react';
import VocPath from './../../components/atoms/VocPath';
import CustomerQuestionTypeSelectItem from '../../components/organisms/CustomerQuestionTypeSelectItem';
import CustomerQuestionContentItem from '../../components/organisms/CustomerQuestionContentItem';

function QuestionRegister() {
    return (
        <>
            <VocPath largeCategory={'VoC'} mediumCategory={'문의하기'} />
            <CustomerQuestionTypeSelectItem />
            <CustomerQuestionContentItem />
        </>
    );
}

export default QuestionRegister;

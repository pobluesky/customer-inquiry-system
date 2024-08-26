import React from 'react';
import VocPath from './../../components/atoms/VocPath';
import QuestionForm from './../../components/templates/QuestionForm';
import { InqTableContainer } from '../../assets/css/Inquiry.css';

function VocList() {
    return (
        <div className={InqTableContainer}>
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 등록'} />
            <QuestionForm />
        </div>
    );
}

export default VocList;

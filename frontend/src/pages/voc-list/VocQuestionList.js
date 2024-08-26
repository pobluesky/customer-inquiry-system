import React from 'react';
import VocPath from '../../components/atoms/VocPath';
import QuestionDashboard from '../../components/templates/QuestionDashboard';
import { InqTableContainer } from '../../assets/css/Inquiry.css';

export default function VocQuestionList() {
    return (
        <div className={InqTableContainer}>

            <VocPath largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <QuestionDashboard />
        </div>
    );
}

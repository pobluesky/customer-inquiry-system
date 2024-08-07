import React from 'react';
import Button from '../atoms/Button';
import arrow from '../../assets/css/icons/voc/arrow.svg';
import { Card_Container, Card_Text, Card_Title, Card_Move_To, Answer } from '../../assets/css/Voc.css';

function QuestionCard({ status, createdAt, updatedAt, title }) {
    const btnName = status === 'completed' ? '답변 완료' : '답변 대기';
    const backgroundColor = status === 'completed' ? '#f02323' : '#007aff';

    return (
        <div className={Card_Container}>
            <Button btnName={btnName} onClick={console.log('Click')} width={'132px'} height={'40px'} margin={'32px 0 0 32px'} backgroundColor={backgroundColor} textColor={'#ffffff'} fontSize={'20px'} border={'none'} borderRadius={'16px'} cursor={'pointer'} />
            <div className={Card_Text}>문의 등록일&nbsp;&nbsp;&nbsp;{createdAt}</div>
            <div className={Card_Text}>답변 등록일&nbsp;&nbsp;&nbsp;{updatedAt}</div>
            <div className={Card_Title}>{title}</div>
            <div className={Card_Move_To}>
                <div className={Answer}>답변 보기</div>
                <div><img src={arrow} /></div>
            </div>
        </div>
    );
}

export default QuestionCard;

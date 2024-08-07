import React from 'react';
import Button from './../atoms/Button';
import arrow from '../../assets/css/icons/voc/arrow.svg';
import { Card_Container, Card_Text, Card_Title, Card_Move_To, Answer } from '../../assets/css/Voc.css';

function Card() {
    const createdAt = '2024-08-07';
    const updatedAt = ''; // 답변 등록일
    const title = '자동차 규격 재검토 문의드립니다.';

    return (
        <div className={Card_Container}>
            <Button btnName={'답변 대기'} onClick={console.log('Click')} width={'132px'} height={'40px'} margin={'32px 0 0 32px'} backgroundColor={'#007aff'} textColor={'#ffffff'} fontSize={'20px'} border={'none'} borderRadius={'16px'} cursor={'pointer'} />
            <div className={Card_Text}>문의 등록일&nbsp;&nbsp;&nbsp;{createdAt}</div>
            <div className={Card_Text}>답변 등록일&nbsp;{updatedAt}</div>
            <div className={Card_Title}>{title}</div>
            <div className={Card_Move_To}>
                <div className={Answer}>답변 보기</div>
                <div><img src={arrow} /></div>
            </div>
        </div>
    );
}

export default Card;

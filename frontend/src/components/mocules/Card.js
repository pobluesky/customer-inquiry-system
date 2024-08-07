import React from 'react';
import Button from './../atoms/Button';

function Card() {
    const inquiryId = 'INQ20240711';
    const createdAt = '2024-08-07';
    // 답변 등록일 변수 추가 필요
    const title = '자동차 규격 재검토 문의드립니다.';

    return (
        <div style={{ width: '360px', height: '360px', border: 'solid 1px #00000', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', display: 'grid' }}>
            <div style={{ display: 'grid' }}>
                <Button btnName={'답변 대기'} onClick={console.log('Click')} width={'132px'} height={'40px'} backgroundColor={'#007aff'} textColor={'#ffffff'} fontSize={'20px'} border={'none'} borderRadius={'12px'} cursor={'pointer'} />
            </div>
            <div>#{inquiryId}</div>
            <div>문의 등록일 {createdAt}</div>
            <div>답변 등록일 </div>
            <div>{title}</div>
        </div>
    );
}

export default Card;

import React from 'react';
import Button from '../atoms/Button';

function RequestBar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
            <div style={{ width: '80vw', margin: '1vw', padding: '1vw 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f0f8fc', border: 'solid #c1c1c1 1px', borderRadius: '20px' }}>
                <div style={{ marginLeft: '2vw' }}>Inquiry 상세조회 및 영업검토</div>
                <div>
                    <Button btnName={'재등록요청'} width={'88px'} height={'28px'} marginRight={'2vw'} backgroundColor={'#0b9dde'} textColor={'#ffffff'} border={'none'} borderRadius={'24px'} fontSize={'12px'} />
                    <Button btnName={'1차검토완료'} width={'88px'} height={'28px'} marginRight={'2vw'} backgroundColor={'#0b9dde'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                    <Button btnName={'최종검토완료'} width={'88px'} height={'28px'} marginRight={'2vw'} backgroundColor={'#0b9dde'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                    <Button btnName={'닫기'} width={'88px'} height={'28px'} marginRight={'2vw'} backgroundColor={'#0b9dde'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                </div>
            </div>
        </div>
    );
}

export default RequestBar;

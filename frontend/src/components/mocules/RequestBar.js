import React from 'react';
import Button from '../atoms/Button';

function RequestBar() {

    const registerRequirement = () => {
        if (window.confirm("재등록을 요청하시겠습니까?")) {
            alert("요청되었습니다.");
        }
    };

    const firstReview = () => {
        if (window.confirm("1차 검토를 완료하시겠습니까?")) {
            alert("1차 검토가 완료되었습니다.");
        }
    };

    const finReview = () => {
        if (window.confirm("최종 검토를 완료하시겠습니까?")) {
            alert("최종 검토가 완료되었습니다.");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
            <div style={{ width: '90vw', margin: '1vw', padding: '1vw 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f0f8fc', border: 'solid #c1c1c1 1px', borderRadius: '20px' }}>
                <div style={{ marginLeft: '2vw' }}>Inquiry 상세조회 및 영업검토</div>
                <div>
                    <Button onClick={registerRequirement} btnName={'재등록요청'} width={'88px'} height={'28px'} margin={'0 2vw 0 0'} backgroundColor={'#03507d'} textColor={'#ffffff'} border={'none'} borderRadius={'24px'} fontSize={'12px'} />
                    <Button onClick={firstReview} btnName={'1차검토완료'} width={'88px'} height={'28px'} margin={'0 2vw 0 0'} backgroundColor={'#03507d'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                    <Button onClick={finReview} btnName={'최종검토완료'} width={'88px'} height={'28px'} margin={'0 2vw 0 0'} backgroundColor={'#03507d'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                    <Button btnName={'닫기'} width={'88px'} height={'28px'} margin={'0 2vw 0 0'} backgroundColor={'#03507d'} textColor={'#ffffff'} border={'none'} borderRadius={'12px'} fontSize={'12px'} />
                </div>
            </div>
        </div>
    );
}

export default RequestBar;

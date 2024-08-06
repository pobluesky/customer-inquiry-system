import React from 'react';
import Button from './../atoms/Button';

function Card() {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', backgroundColor: '#ffffff', width: '360px', height: '360px', border: 'solid 1px #00000', borderRadius: '12px' }}>
            <Button
                btnName={'답변 대기'}
                onClick={console.log('Click')}
                width={'132px'}
                height={'40px'}
                backgroundColor={'#007aff'}
                textColor={'#ffffff'}
                fontSize={'20px'} 
                border={'none'}
                borderRadius={'12px'}
                cursor={'pointer'} />
        </div>
    );
}

export default Card;

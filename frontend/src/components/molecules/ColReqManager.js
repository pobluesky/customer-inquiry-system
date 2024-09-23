import React from 'react';
import { Col_Manager } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

export default function ColReqManager({ setColReqFilter }) {
    const userId = getCookie('userId');

    return (
        <div className={Col_Manager}>
            <div
                onClick={() => {
                    setColReqFilter('');
                }}
            >
                전체
            </div>
            <div
                onClick={() => {
                    setColReqFilter(userId);
                }}
            >
                내 협업
            </div>
        </div>
    );
}

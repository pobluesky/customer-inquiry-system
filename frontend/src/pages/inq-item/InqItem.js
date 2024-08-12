import React, { useState, useEffect } from 'react';
import Header from '../../components/mocules/Header';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from './../../components/mocules/RequestBar';
import Offersheet from './Offersheet';
import '../../assets/css/Offersheet.css';

function InqItem() {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar requestBarTitle={"Inquiry 상세조회 및 영업검토"} role={"salesManager"} />
            <Offersheet inquiryId={1} />
        </div>
    )
}

export default InqItem;

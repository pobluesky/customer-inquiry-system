import React, { useState, useEffect } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import RequestBar from './../../components/mocules/RequestBar';
import OfferSheet from './offersheet';
import '../../assets/css/Offersheet.css';

function Inq() {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar />
            <OfferSheet inquiryId={1} />
        </div>
    );
}

export default Inq;

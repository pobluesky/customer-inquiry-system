import React, { useState, useEffect } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';

function Inq() {
    console.log('check');
    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
        </div>
    );
}

export default Inq;

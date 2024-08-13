import React from 'react';
import Header from '../../components/mocules/Header';
import Path from './../../components/atoms/Path';

function Voc() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <Path largeCategory={'VoC'} mediumCategory={'문의 목록'} />
        </>
    );
}

export default Voc;

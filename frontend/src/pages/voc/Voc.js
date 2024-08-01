import React from 'react';
import Header from '../../components/mocules/Header';

function Voc() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <div>VoC페이지입니다.</div>
        </>
    );
}

export default Voc;

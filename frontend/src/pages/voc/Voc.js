import React from 'react';
import Header from '../../components/mocules/Header';
import Notification from "../../components/mocules/Notification";

function Voc() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <Notification />
        </>
    );
}

export default Voc;

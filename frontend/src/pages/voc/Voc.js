import React from 'react';
import Header from '../../components/mocules/Header';
import Notification from "../../components/mocules/Notification";
import InquiryItem from "../../components/organisms/InquiryItem";

function Voc() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <InquiryItem />
            <Notification />
        </>
    );
}

export default Voc;

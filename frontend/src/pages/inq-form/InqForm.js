import React, { useState, useEffect } from 'react';
import Header from '../../components/mocules/Header';
import InqPath from '../../components/atoms/InqPath';
import RequestBar from "../../components/mocules/RequestBar";

function InqForm() {
    console.log('check');
    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
            <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} />
        </div>
    );
}

export default InqForm;

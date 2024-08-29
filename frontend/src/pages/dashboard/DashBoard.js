import React from 'react';
import InquiryMonthlyFilledOrderChart from '../../components/organisms/InquiryMonthlyFilledOrderChart';
import InquiryProgressCountChart from '../../components/organisms/InquiryProgressCountChart';
import InquiryFilledOrderCountChart from '../../components/organisms/InquiryFilledOrderCountChart';
import InquiryProductProgressChart from '../../components/organisms/InquiryProductProgressChart';

export default function DashBoard() {
    return (
        <>
            <InquiryMonthlyFilledOrderChart />
            <InquiryProgressCountChart />
            <InquiryFilledOrderCountChart />
            <InquiryProductProgressChart />
        </>
    );
}

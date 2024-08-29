import React from 'react';
import InquiryMonthlyFilledOrderChart from '../../components/organisms/InquiryMonthlyFilledOrderChart';
import InquiryProgressChart from '../../components/organisms/InquiryProgressChart';
import InquiryFilledOrderCountChart from '../../components/organisms/InquiryFilledOrderCountChart';
import InquiryProductProgressChart from '../../components/organisms/InquiryProductProgressChart'

export default function DashBoard() {
    return (
        <>
            <InquiryMonthlyFilledOrderChart />
            <InquiryProgressChart />
            <InquiryFilledOrderCountChart />
            <InquiryProductProgressChart />
        </>
    );
}

import React from 'react';
import InquiryMonthlyFilledOrderChart from '../../components/organisms/InquiryMonthlyFilledOrderChart';
import InquiryProgressCountChart from '../../components/organisms/InquiryProgressCountChart';
import InquiryFilledOrderCountChart from '../../components/organisms/InquiryFilledOrderCountChart';
import InquiryProductProgressChart from '../../components/organisms/InquiryProductProgressChart';
import { Dashboard_Container } from '../../assets/css/Chart.css';

export default function DashBoard() {
    return (
        <div className={Dashboard_Container}>
            <InquiryMonthlyFilledOrderChart />
            <InquiryProgressCountChart />
            <InquiryFilledOrderCountChart />
            <InquiryProductProgressChart />
        </div>
    );
}

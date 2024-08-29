import React from 'react';
import InquiryMonthlyFilledOrderChart from '../../components/organisms/InquiryMonthlyFilledOrderChart';
import InquiryProgressChart from '../../components/organisms/InquiryProgressChart';
import InquiryFilledOrderCountChart from '../../components/organisms/InquiryFilledOrderCountChart';
import InquiryProductProgressChart from '../../components/organisms/InquiryProductProgressChart'
// import HorizontalBarChart from '../../components/organisms/HorizontalBarChart';
// import VerticalBarChart from '../../components/organisms/BarChart'
// import PieChart from '../../components/organisms/PieChart';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

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

import React from 'react';
import HorizontalBarChart from '../../components/organisms/HorizontalBarChart';
import VerticalBarChart from '../../components/organisms/BarChart'
import PieChart from '../../components/organisms/PieChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashBoard() {
    const data = [
        { productType: '자동차', progress: [] },
        { productType: '자동차', progress: '1차 검토' },
        { productType: '자동차', progress: '접수' },
    ];

    const dataSample = [
        { productType: '자동차', progress: [100, 200, 300, 400] },
        { productType: '열연', progress: [400, 300, 200, 100] },
    ];

    return (
        <>
            <HorizontalBarChart data={data} />
            <VerticalBarChart />
            <PieChart />
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} />
            </div>
        </>
    );
}

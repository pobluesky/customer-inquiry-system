import React from 'react';
import Header from '../../components/mocules/Header';
import HorizontalBarChart from '../../components/organisms/HorizontalBarChart';
import VerticalBarChart from '../../components/organisms/VerticalBarChart';
import PieChart from '../../components/organisms/PieChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashBoard() {
    // const data = [{productType: '자동차', progress: '최종검토'},
    //               {productType: '자동차', progress: '1차 검토'},
    //               {productType: '자동차', progress: '접수'}]

    const dataSample = [{productType: '자동차', progress: [100, 200, 300, 400]}, {productType: '열연', progress: [400, 300, 200, 100]}];

    return (
        <>
            <Header login={true} inq={false} voc={false} dashboard={true} />
            <HorizontalBarChart />
            <VerticalBarChart />
            <PieChart />
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} />
            </div>
        </>
    );
}

export default DashBoard;

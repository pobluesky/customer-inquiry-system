import React from 'react';
import BarChart from '../../components/organisms/BarChart';
import PieChart from '../../components/organisms/PieChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashBoard() {
<<<<<<< Updated upstream
    return (
        <>
            <BarChart />
=======
    const data = [{productType: '자동차', progress: []]},
                  {productType: '자동차', progress: '1차 검토'},
                  {productType: '자동차', progress: '접수'}]

    const dataSample = [{productType: '자동차', progress: [100, 200, 300, 400]}, {productType: '열연', progress: [400, 300, 200, 100]}];

    return (
        <>
            <Header login={true} inq={false} voc={false} dashboard={true} />
            <HorizontalBarChart data={data}/>
            <VerticalBarChart />
>>>>>>> Stashed changes
            <PieChart />
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} />
            </div>
        </>
    );
}

export default DashBoard;

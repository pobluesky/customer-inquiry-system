import React from 'react';
import Header from '../../components/mocules/Header';
import HorizontalBarChart from '../../components/organisms/HorizontalBarChart';
import VerticalBarChart from '../../components/organisms/VerticalBarChart';
import PieChart from '../../components/organisms/PieChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashBoard() {
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

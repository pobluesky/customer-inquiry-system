import React from 'react';
import Header from '../../components/mocules/Header';
import BarChart from '../../components/organisms/BarChart';
import PieChart from '../../components/organisms/PieChart';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashBoard() {
    return (
        <>
            <Header login={true} inq={false} voc={false} dashboard={true} />
            <BarChart />
            <PieChart />
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} />
            </div>
        </>
    );
}

export default DashBoard;

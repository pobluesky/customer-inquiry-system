import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function PieChart() {
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={66} />
        </div>
    );
}
export default PieChart;

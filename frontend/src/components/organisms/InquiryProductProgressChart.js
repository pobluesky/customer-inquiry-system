import React from 'react';
import GaugeChart from 'react-gauge-chart';

function InquiryProductProgressChart() {
    return (
        <GaugeChart
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[1.428, 1.428, 1.428, 1.428, 1.428, 1.428, 1.432]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.37}
            arcPadding={0.02}
        />
    );
}

export default InquiryProductProgressChart;

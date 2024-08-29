import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Chart_Container } from '../../assets/css/Chart.css';

function InquiryProductProgressChart() {
    return (
        <div className={Chart_Container}>
            <div>전체 제품별 주문 처리 현황</div>
            <div>
                <div>
                    <GaugeChart
                        id="gauge-chart5"
                        nrOfLevels={420}
                        arcsLength={[
                            1.428, 1.428, 1.428, 1.428, 1.428, 1.428, 1.432,
                        ]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.8}
                        arcPadding={0.02}
                        hideText={true}
                    />
                </div>
                <div>
                    <GaugeChart
                        id="gauge-chart5"
                        nrOfLevels={420}
                        arcsLength={[
                            1.428, 1.428, 1.428, 1.428, 1.428, 1.428, 1.432,
                        ]}
                        colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={0.37}
                        arcPadding={0.02}
                        hideText={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default InquiryProductProgressChart;

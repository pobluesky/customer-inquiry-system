import React, { Component } from 'react';
import Chart from 'react-apexcharts';

// Inquiry 주문 체결 완료 및 미완료 비중
class InquiryFilledOrderCountChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: {
                    text: 'Inquiry 주문 체결 완료 및 미완료 비중',
                },
            },
            series: [44, 56],
            labels: ['주문 체결 완료', '주문 체결 미완료'],
        };
    }

    render() {
        return (
            <div className="donut">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    width="380"
                />
            </div>
        );
    }
}

export default InquiryFilledOrderCountChart;

import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
    Chart_Container,
    Chart_Container_Custom,
} from '../../assets/css/Chart.css';

// Inquiry 주문 체결 완료 및 미완료 비중
class InquiryFilledOrderCountChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 전체
            options1: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                labels: ['주문 체결 완료', '주문 체결 미완료'],
                colors: ['#00A9FF', '#B3C8CF'],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Pretendard-Regular',
                    fontWeight: 400,
                    markers: {
                        size: 4,
                        shape: 'square',
                        strokeWidth: 0,
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0,
                    },
                    onItemClick: {
                        toggleDataSeries: true,
                    },
                    onItemHover: {
                        highlightDataSeries: true,
                    },
                },
            },
            series1: [44, 56],
            // 내 평균
            options2: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                labels: ['주문 체결 완료', '주문 체결 미완료'],
                colors: ['#F7418F', '#B3C8CF'],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Pretendard-Regular',
                    fontWeight: 400,
                    markers: {
                        size: 4,
                        shape: 'square',
                        strokeWidth: 0,
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0,
                    },
                    onItemClick: {
                        toggleDataSeries: true,
                    },
                    onItemHover: {
                        highlightDataSeries: true,
                    },
                },
            },
            series2: [30, 70],
        };
    }

    render() {
        return (
            <div className={Chart_Container}>
                <div className={Chart_Container_Custom}>
                    Inquiry 주문 체결 완료 및 미완료 비중
                </div>
                <div>
                    <div>
                        <Chart
                            options={this.state.options1}
                            series={this.state.series1}
                            type="donut"
                            width="220"
                            height="220"
                        />
                    </div>
                    <div>
                        <Chart
                            options={this.state.options2}
                            series={this.state.series2}
                            type="donut"
                            width="220"
                            height="220"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default InquiryFilledOrderCountChart;

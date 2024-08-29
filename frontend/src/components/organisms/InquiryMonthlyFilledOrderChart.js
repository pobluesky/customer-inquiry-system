import React, { Component } from 'react';
import Chart from 'react-apexcharts';

// 월별 Inquiry 접수-주문 체결 평균 처리 기간
class InquiryMonthlyFilledOrderChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'basic-bar',
                },
                xaxis: {
                    categories: [
                        '1월',
                        '2월',
                        '3월',
                        '4월',
                        '5월',
                        '6월',
                        '7월',
                        '8월',
                        '9월',
                        '10월',
                        '11월',
                        '12월',
                    ],
                },
                stroke: {
                    curve: 'smooth', // straight
                },
                markers: {
                    size: 4, // 라인 차트 위에 표현되는 마커
                },
                fill: {
                    type: 'gradient', // 'gradient', 'solid', 'pattern', 'image'
                },
                title: {
                    text: '월별 Inquiry 접수-주문 체결 평균 처리 기간'
                }
            },
            series: [
                {
                    name: '[전체]',
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                },
                {
                    name: '[개인]',
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                },
            ],
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default InquiryMonthlyFilledOrderChart;

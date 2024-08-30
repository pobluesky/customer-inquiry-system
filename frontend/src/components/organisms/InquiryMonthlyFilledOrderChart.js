import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Chart_Container } from '../../assets/css/Chart.css';

// 월별 Inquiry 접수-주문 체결 평균 처리 기간
class InquiryMonthlyFilledOrderChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: '월별 Inquiry 접수-주문 체결 평균 처리 기간',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
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
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                },
                stroke: {
                    curve: 'smooth', // straight
                },
                fill: {
                    type: 'solid', // 'gradient', 'solid', 'pattern', 'image'
                },
                colors: ['#0079FF', '#FF0060'],
                yaxis: [
                    {
                        axisBorder: {
                            show: false,
                        },
                        title: {
                            text: '전체 평균',
                            style: {
                                color: '#25262B',
                                fontSize: '12px',
                                fontFamily: 'Pretendard-Regular',
                                fontWeight: 500,
                                cssClass: 'apexcharts-yaxis-title',
                            },
                        },
                        min: 100,
                        max: 120,
                        tickAmount: 5,
                        labels: {
                            formatter: function (value) {
                                return Math.floor(value);
                            },
                        },
                    },
                    {
                        axisBorder: {
                            show: false,
                        },
                        opposite: true,
                        title: {
                            text: '개인 평균',
                            style: {
                                color: '#25262B',
                                fontSize: '12px',
                                fontFamily: 'Pretendard-Regular',
                                fontWeight: 500,
                                cssClass: 'apexcharts-yaxis-title',
                            },
                        },
                        min: 0,
                        max: 20,
                        tickAmount: 5,
                        labels: {
                            formatter: function (value) {
                                return Math.floor(value);
                            },
                        },
                    },
                ],
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
                title: {
                    text: '월별 Inquiry 접수-주문 체결 평균 처리 기간',
                    align: 'center',
                    margin: 10,
                    floating: false,
                    style: {
                        fontSize: '16px',
                        fontWeight: 500,
                        fontFamily: 'Pretendard-Regular',
                        color: '#25262B',
                    },
                },
            },
            series: [
                {
                    name: '전체 평균',
                    data: [
                        105.2, 106.1, 107.6, 104.9, 108.9, 104.5, 112.5, 110.7,
                        106.8, 108.4, 115.1, 109.8,
                    ],
                },
                {
                    name: '나의 평균',
                    data: [
                        0.88, 3.01, 6.16, 2.5, 1.02, 4.47, 3.85, 5.71, 5.47,
                        8.35, 5.24, 7.98,
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <div className={Chart_Container}>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="450"
                    height="250"
                />
            </div>
        );
    }
}

export default InquiryMonthlyFilledOrderChart;

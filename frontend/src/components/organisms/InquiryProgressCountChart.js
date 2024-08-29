import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Chart_Container } from '../../assets/css/Chart.css';

// 전체 Inquiry 검토 현황별 건수
class InquiryProgressCountChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: '전체 Inquiry 검토 현황별 건수',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: [
                        '1step',
                        '2step',
                        '3step',
                        '4step',
                        '5step',
                        '6step',
                        '7step',
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
                    width: [0, 4],
                },
                markers: {
                    size: 2, // 라인 차트 위에 표현되는 마커
                    strokeColors: '#00DFA2',
                    hover: {
                        size: 4,
                    },
                },
                fill: {
                    type: 'solid', // 'gradient', 'solid', 'pattern', 'image'
                },
                colors: ['#FF0060', '#00DFA2'],
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
                        min: 0,
                        max: 700,
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
                        max: 50,
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
                    text: '전체 Inquiry 검토 현황별 건수',
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
                    name: '전체 평균', // 평균으로 하면 어떨지?
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201],
                },
                {
                    name: '나의 평균',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17],
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

export default InquiryProgressCountChart;

import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class VerticalBarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: {
                    text: '월별 제품별 문의 건수',
                    align: 'center',
                    style: {
                        fontSize: '20px',
                        fontWeight: '300',
                    },
                },
                // 그래프 격자
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    show: false,
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                chart: {
                    id: 'pobluesky-dashboard',
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    show: false,
                },
                dataLabels: {
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '12px', // 데이터별
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: ['#ffffff'],
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10,
                        borderRadiusApplication: 'end', // Whether to apply border-radius "around" both ends or only to single "end"
                        borderRadiusWhenStacked: 'last', // Whether to apply border-radius to all bars or only to the data-set that is drawn last (all / last)
                        columnWidth: '60%', // In column charts, columnWidth is the percentage of the available width in the grid-rect. 0 ~ 100%
                        distributed: false, // Turn this option to make the bars discrete. Each value indicates one bar per series.
                        colors: {
                            ranges: [
                                {
                                    from: 0, // Value indicating range’s upper limit
                                    to: 0, // Value indicating range’s lower limit
                                    color: 'undefined', // Color to fill the range with
                                },
                            ],
                            backgroundBarColors: [],
                            backgroundBarOpacity: 1,
                            backgroundBarRadius: 0,
                        },
                        dataLabels: {
                            position: 'center',
                        },
                    },
                },
                xaxis: {
                    position: 'top',
                    labels: { show: true },
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
                    type: 'category', // category, datetime, numeric
                },
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: '#000000',
                        width: 2, // 좌측 데이터 세로축 기준 라인
                        height: '1',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#000000',
                        height: '100%',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    min: 0,
                    max: 1000,
                    stepSize: 250,
                },
            },
            series: [
                {
                    name: '문의 건수',
                    data: [250, 750, 950, 870, 630, 420, 930],
                },
            ],
        };
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="mixed-chart">
                        <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
                    </div>
                </div>
            </>
        );
    }
}

export default VerticalBarChart;

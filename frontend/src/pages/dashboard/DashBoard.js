import React, { Component } from 'react';
import Header from '../../components/mocules/Header';
import Chart from 'react-apexcharts';

class DashBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'pobluesky-dashboard',
                },
                legend: {
                    show: false,
                },
                dataLabels: {
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '24px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: ['#ffffff'],
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        borderRadius: 24,
                        borderRadiusApplication: 'end', // Whether to apply border-radius "around" both ends or only to single "end"
                        borderRadiusWhenStacked: 'last', // Whether to apply border-radius to all bars or only to the data-set that is drawn last (all / last)
                        // columnWidth: '70%', // In column charts, columnWidth is the percentage of the available width in the grid-rect. 0 ~ 100%
                        barHeight: '80%', // In horizontal bar charts, barHeight is the percentage of the available height in the grid-rect.  0 ~ 100%
                        distributed: true, // Turn this option to make the bars discrete. Each value indicates one bar per series.
                        // rangeBarOverlap: true, // In a range-Bar / timeline chart, the bars should overlap over each other instead of stacking if this option is enabled.
                        // rangeBarGroupRows: false, // In a multi-series range-Bar / timeline chart, group rows (horizontal bars) together instead of stacking up. Helpful when there are no overlapping rows but distinct values.
                        // hideZeroBarsWhenGrouped: true, // In a non-stacked (grouped or clustered) bar chart, do not occupy space for those bars whose value is zero.
                        // isDumbbell: false, // In a rangebar chart, add dots at the starting and ending shape of the bar.
                        // dumbbellColors: undefined, // When dumbbell chart is enabled, use this option to set custom colors for the dots at the starting and ending shape.
                        // isFunnel: false, // Turn this option on to create a Funnel chart.
                        // isFunnel3d: true, // Give a 3d look to the funnel chart by adding shadows below each bar.
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
                    labels: { show: false },
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['열연', '후판', '표면처리', '자동차'],
                    type: 'category', // category, datetime, numeric
                },
            },
            series: [
                {
                    name: 'pobluesky',
                    data: [91, 75, 60, 40],
                },
            ],
        };
    }

    render() {
        return (
            <>
                <Header login={true} inq={false} voc={false} dashboard={true} />
                <div className="row">
                    <div className="mixed-chart">
                        <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
                    </div>
                </div>
            </>
        );
    }
}

export default DashBoard;

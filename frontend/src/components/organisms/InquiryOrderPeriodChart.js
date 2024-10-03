import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const InquiryOrderPeriodChart = ({ orderPeriod }) => {
    const data = [
        {
            id: '전체',
            color: '#D9A9FF',
            data: [
                {
                    x: '1월',
                    y: orderPeriod.total[0][1],
                },
                {
                    x: '2월',
                    y: orderPeriod.total[1][1],
                },
                {
                    x: '3월',
                    y: orderPeriod.total[2][1],
                },
                {
                    x: '4월',
                    y: orderPeriod.total[3][1],
                },
                {
                    x: '5월',
                    y: orderPeriod.total[4][1],
                },
                {
                    x: '6월',
                    y: orderPeriod.total[5][1],
                },
                {
                    x: '7월',
                    y: orderPeriod.total[6][1],
                },
                {
                    x: '8월',
                    y: orderPeriod.total[7][1],
                },
                {
                    x: '9월',
                    y: orderPeriod.total[8][1],
                },
                {
                    x: '10월',
                    y: orderPeriod.total[9][1],
                },
                {
                    x: '11월',
                    y: orderPeriod.total[10][1],
                },
                {
                    x: '12월',
                    y: orderPeriod.total[11][1],
                },
            ],
        },
        {
            id: '담당자',
            color: '#ADE8FF',
            data: [
                {
                    x: '1월',
                    y: orderPeriod.manager[0][1],
                },
                {
                    x: '2월',
                    y: orderPeriod.manager[1][1],
                },
                {
                    x: '3월',
                    y: orderPeriod.manager[2][1],
                },
                {
                    x: '4월',
                    y: orderPeriod.manager[3][1],
                },
                {
                    x: '5월',
                    y: orderPeriod.manager[4][1],
                },
                {
                    x: '6월',
                    y: orderPeriod.manager[5][1],
                },
                {
                    x: '7월',
                    y: orderPeriod.manager[6][1],
                },
                {
                    x: '8월',
                    y: orderPeriod.manager[7][1],
                },
                {
                    x: '9월',
                    y: orderPeriod.manager[8][1],
                },
                {
                    x: '10월',
                    y: orderPeriod.manager[9][1],
                },
                {
                    x: '11월',
                    y: orderPeriod.manager[10][1],
                },
                {
                    x: '12월',
                    y: orderPeriod.manager[11][1],
                },
            ],
        },
    ];

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            colors={['#0079FF', '#FF0060']}
            colorBy="index"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 9,
                tickPadding: 8,
                tickRotation: 0,
            }}
            axisLeft={null}
            enableGridY={false}
            lineWidth={5}
            pointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            areaOpacity={0}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[]}
        />
    );
};

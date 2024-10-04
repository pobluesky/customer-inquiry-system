import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Dashboard_Item } from '../../assets/css/Chart.css';

export const InquiryOrderPeriodChart = ({ orderPeriod, name }) => {
    // const data = [
    //     {
    //         id: '전체',
    //         color: '#D9A9FF',
    //         data: [
    //             {
    //                 x: '1월',
    //                 y: orderPeriod.total[0][1],
    //             },
    //             {
    //                 x: '2월',
    //                 y: orderPeriod.total[1][1],
    //             },
    //             {
    //                 x: '3월',
    //                 y: orderPeriod.total[2][1],
    //             },
    //             {
    //                 x: '4월',
    //                 y: orderPeriod.total[3][1],
    //             },
    //             {
    //                 x: '5월',
    //                 y: orderPeriod.total[4][1],
    //             },
    //             {
    //                 x: '6월',
    //                 y: orderPeriod.total[5][1],
    //             },
    //             {
    //                 x: '7월',
    //                 y: orderPeriod.total[6][1],
    //             },
    //             {
    //                 x: '8월',
    //                 y: orderPeriod.total[7][1],
    //             },
    //             {
    //                 x: '9월',
    //                 y: orderPeriod.total[8][1],
    //             },
    //             {
    //                 x: '10월',
    //                 y: orderPeriod.total[9][1],
    //             },
    //             {
    //                 x: '11월',
    //                 y: orderPeriod.total[10][1],
    //             },
    //             {
    //                 x: '12월',
    //                 y: orderPeriod.total[11][1],
    //             },
    //         ],
    //     },
    //     {
    //         id: '담당자',
    //         color: '#ADE8FF',
    //         data: [
    //             {
    //                 x: '1월',
    //                 y: orderPeriod.manager[0][1],
    //             },
    //             {
    //                 x: '2월',
    //                 y: orderPeriod.manager[1][1],
    //             },
    //             {
    //                 x: '3월',
    //                 y: orderPeriod.manager[2][1],
    //             },
    //             {
    //                 x: '4월',
    //                 y: orderPeriod.manager[3][1],
    //             },
    //             {
    //                 x: '5월',
    //                 y: orderPeriod.manager[4][1],
    //             },
    //             {
    //                 x: '6월',
    //                 y: orderPeriod.manager[5][1],
    //             },
    //             {
    //                 x: '7월',
    //                 y: orderPeriod.manager[6][1],
    //             },
    //             {
    //                 x: '8월',
    //                 y: orderPeriod.manager[7][1],
    //             },
    //             {
    //                 x: '9월',
    //                 y: orderPeriod.manager[8][1],
    //             },
    //             {
    //                 x: '10월',
    //                 y: orderPeriod.manager[9][1],
    //             },
    //             {
    //                 x: '11월',
    //                 y: orderPeriod.manager[10][1],
    //             },
    //             {
    //                 x: '12월',
    //                 y: orderPeriod.manager[11][1],
    //             },
    //         ],
    //     },
    // ];

    const data = [
        {
            id: '담당자',
            data: [
                { x: '1월', y: 30 },
                { x: '2월', y: 25 },
                { x: '3월', y: 40 },
                { x: '4월', y: 12 },
                { x: '5월', y: 20 },
                { x: '6월', y: 45 },
                { x: '7월', y: 60 },
                { x: '8월', y: 18 },
                { x: '9월', y: 55 },
                { x: '10월', y: 25 },
                { x: '11월', y: 40 },
                { x: '12월', y: 50 },
            ],
        },
        {
            id: '전체',
            data: [
                { x: '1월', y: 85 },
                { x: '2월', y: 92 },
                { x: '3월', y: 78 },
                { x: '4월', y: 94 },
                { x: '5월', y: 81 },
                { x: '6월', y: 70 },
                { x: '7월', y: 76 },
                { x: '8월', y: 88 },
                { x: '9월', y: 74 },
                { x: '10월', y: 90 },
                { x: '11월', y: 82 },
                { x: '12월', y: 95 },
            ],
        },
    ];

    return (
        <div
            className={Dashboard_Item}
            style={{
                aspectRatio: '1.75 / 1',
                height: '12.5vw',
            }}
        >
            <span>월별 Inquiry 접수건 주문 체결 소요일 평균</span>
            <ResponsiveLine
                data={data}
                theme={{
                    legends: { text: { fontSize: 12 } },
                }}
                margin={{ top: 20, right: 10, bottom: 80, left: 10 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                curve="natural"
                colors={['#FEF6C0', '#FF8484']}
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
                lineWidth={0}
                pointSize={0}
                pointColor={{ theme: 'background' }}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={1}
                areaBaselineValue={11}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        data: [
                            { label: '담당자 평균', color: '#FF8484' },
                            { label: `${name} 평균`, color: '#FEF6C0' },
                        ],
                        anchor: 'bottom',
                        direction: 'row',
                        justify: true,
                        translateX: 0,
                        translateY: 50,
                        itemsSpacing: 20,
                        itemWidth: 80,
                        itemHeight: 0,
                        itemTextColor: '#000000',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 12,
                        symbolShape: 'circle',
                    },
                ]}
            />
        </div>
    );
};

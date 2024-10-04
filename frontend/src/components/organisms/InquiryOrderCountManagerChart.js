import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Dashboard_Item } from '../../assets/css/Chart.css';

export const InquiryOrderCountManagerChart = ({ orderCount }) => {
    const managerCompleted = Math.round(orderCount.manager.completed);
    const managerUncompleted = Math.round(orderCount.manager.uncompleted);

    const data = [
        {
            id: '체결 완료됨',
            label: '체결 완료됨',
            value: managerCompleted,
        },
        {
            id: '체결 미완료',
            label: '체결 미완료',
            value: managerUncompleted,
        },
    ];

    return (
        <div
            className={Dashboard_Item}
            style={{ width: '13vw', aspectRatio: '1 / 1', height: 'auto' }}
        >
            <ResponsivePie
                data={data}
                theme={{
                    legends: { text: { fontSize: 16 } },
                    text: { fontSize: 16 },
                }}
                margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
                innerRadius={0.6}
                padAngle={3}
                activeOuterRadiusOffset={8}
                colors={['#FF8484', '#FEF6C0']}
                colorBy="index"
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', '3']],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', '3']],
                }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: true,
                        translateX: 0,
                        translateY: 60,
                        itemsSpacing: 20,
                        itemWidth: 110,
                        itemHeight: 0,
                        itemTextColor: '#000000',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                    },
                ]}
            />
        </div>
    );
};

import React, { useState } from 'react';
import {
    Container,
    Sheet,
    Opend,
    QualityItemColumn,
    _none,
} from '../../../assets/css/Form.css';
import ToggleBar from '../../mocules/ToggleBar';
import ReviewText from '../../mocules/ReviewText';
import QualityItem from '../QualityItem';

const QualityReviewTextForm = () => {
    // 최종 검토 내용 작성
    const [isChecked, setCheck] = useState(true);

    const lineItems = [
        { label: '종합결과', value: '미승인' },
        { label: '종합결과세부사항', value: '추가검토필요' },
        { label: '제품규격', value: 'SPCE' },
        { label: '주문용도', value: '자동차 부품' },
        { label: '도금량(코드)', value: 'Q3124' },
        { label: '도유량(코드)', value: 'R1451' },
        { label: '두께공차', value: '1000' },
        { label: '주문edge', value: '20' },
        { label: '고객품질요구사항', value: '품질검토' },
        { label: '생산가능소구분', value: '광양' },
    ];

    return (
        <div className={Container} style={{ marginTop: '-2vh' }}>
            <div className={Sheet}>
                <ToggleBar
                    title={'품질검토정보'}
                    isChecked={isChecked}
                    setCheck={setCheck}
                />
                {isChecked ? (
                    <div className={Opend}>
                        <ReviewText
                            title={'품질검토내용'}
                            width="115px"
                            height="100px"
                        />

                        {/* 컬럼 라벨 */}
                        <div className={QualityItemColumn}>
                            {lineItems.map((item, index) => (
                                <div key={index}>{item.label}</div>
                            ))}
                        </div>
                        <QualityItem lineItems={lineItems} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default QualityReviewTextForm;

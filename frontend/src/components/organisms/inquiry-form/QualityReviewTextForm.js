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

const QualityReviewTextForm = ({ formData }) => {
    if(!formData) {
        return;
    }

    console.log(formData);
    // 최종 검토 내용 작성
    const [isChecked, setCheck] = useState(true);

    const lineItems = [
        { label: '종합결과', value: formData.qualityReviewInfo.finalResult },
        { label: '종합결과세부사항', value: formData.qualityReviewInfo.finalResultDetails },
        { label: '제품규격', value: formData.qualityReviewInfo.standard },
        { label: '주문용도', value: formData.qualityReviewInfo.orderCategory },
        { label: '도금량(코드)', value: formData.qualityReviewInfo.coatingMetalQuantity },
        { label: '도유량(코드)', value: formData.qualityReviewInfo.coatingOilQuantity },
        { label: '두께공차', value: formData.qualityReviewInfo.thicknessTolerance },
        { label: '주문edge', value: formData.qualityReviewInfo.orderEdge },
        { label: '고객품질요구사항', value: formData.qualityReviewInfo.customerQReq },
        { label: '생산가능소구분', value: formData.qualityReviewInfo.availableLab },
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
                            content={formData.qualityComments}
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

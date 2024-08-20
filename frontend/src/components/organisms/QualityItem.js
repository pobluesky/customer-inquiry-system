import React from 'react';
import { QualityItemRow, QualityItemInput } from '../../assets/css/Form.css';

const QualityItem = ({ lineItems }) => {
    return (
        <div className={QualityItemRow}>
            {lineItems?.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    className={QualityItemInput}
                    value={item.value}
                    readOnly
                />
            ))}
        </div>
    );
};

export default QualityItem;

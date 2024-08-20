import React from 'react';
import {
    LineItemRow,
    LineItemInput,
    _checkbox,
} from '../../assets/css/Form.css';

const LineItem = ({ id, lineItems, onRowSelect, onChange, isChecked }) => {
    return (
        <div className={LineItemRow}>
            {isChecked && (
                <div>
                    <input
                        type="checkbox"
                        className={_checkbox}
                        onChange={() => onRowSelect(id)}
                    />
                </div>
            )}
            {Object.keys(lineItems).map((key, index) => (
                key !== 'lineItemId' && key !== 'selected' && (
                    <input
                        key={index}
                        type="text"
                        className={LineItemInput}
                        value={lineItems[key]}
                        onChange={(e) => onChange(id, key, e.target.value)}
                    />
                )
            ))}
        </div>
    );
};

export default LineItem;

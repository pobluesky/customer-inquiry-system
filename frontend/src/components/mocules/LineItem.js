import React from 'react';
import {
    LineItemRow,
    LineItemInput,
    _checkbox,
} from '../../assets/css/Form.css';

const LineItem = ({ id, lineItems, onRowSelect, onChange, isChecked }) => {
    const handleInputChange = (index, event) => {
        onChange(id, index, event.target.value);
    };

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
            {lineItems.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    className={LineItemInput}
                    value={item}
                    onChange={(event) => handleInputChange(index, event)}
                />
            ))}
        </div>
    );
};

export default LineItem;

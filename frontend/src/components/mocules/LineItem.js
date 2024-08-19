import React, { useState } from 'react';
import {
    LineItemRow,
    LineItemInput,
    _checkbox,
} from '../../assets/css/Form.css';

const LineItem = ({ id, lineItems, onRowSelect, onChange, isChecked }) => {
    const [selected, setSelected] = useState(isChecked);

    return (
        <div className={LineItemRow}>
            {isChecked ? (
                <div>
                    <input
                        type="checkbox"
                        className={_checkbox}
                        onChange={() => onRowSelect(id)}
                    />
                </div>
            ) : null}

            {lineItems?.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    className={LineItemInput}
                    value={item}
                    onChange={(e) => onChange(id, index, e.target.value)}
                />
            ))}
        </div>
    );
};

export default LineItem;

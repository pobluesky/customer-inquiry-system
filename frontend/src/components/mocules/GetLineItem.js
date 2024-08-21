import React from 'react';
import {
    LineItemRow,
    LineItemInput,
    LineItemInputRow,
    _checkbox,
    LineItemGetRow
} from '../../assets/css/Form.css';

const getAllColumns = (data) => {
    const columnsSet = new Set();
    data.forEach(item => {
        Object.keys(item).forEach(key => columnsSet.add(key));
    });
    return Array.from(columnsSet);
};

const GetLineItem = ({ lineItems }) => {

    console.log("lineItems: ", lineItems);
    const columns = getAllColumns(lineItems);

    return (
        <div style={{ display: 'flex' }}>
            <div className={LineItemGetRow}>
                <div>
                    <input
                        type="checkbox"
                        className={_checkbox}
                        style={{ display: 'none' }}
                    />
                </div>
                {lineItems.map((item, index) => (
                    <div key={index}>
                        {columns.map((column) => (
                            <input value={item[column]} className={LineItemInput} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetLineItem;
import React, { useState } from 'react';
import {
    LineItemRow,
    LineItemInput,
    _checkbox
} from "../../assets/css/Form.css";

// InquiryRow 컴포넌트 정의
const LineItem = ({ id, lineItems, onRowSelect, onChange }) => {
  return (
      <div className={LineItemRow}>
        <div>
          <input type="checkbox" className={_checkbox} onChange={() => onRowSelect(id)}/>
        </div>
        {lineItems.map((item, index) => (
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

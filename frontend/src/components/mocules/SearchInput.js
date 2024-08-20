// 통합 후 삭제 예정
import React, { forwardRef } from 'react';
import search from '../../assets/css/icons/search.svg';
import { Search_Input, Input, Button } from '../../assets/css/Form.css';

const SearchInput = forwardRef(({ onChange, value }, ref) => (
    <div className={Search_Input}>
        <input
            className={Input}
            ref={ref}
            value={value}
            onChange={onChange}
            type="text"
        />
        <button className={Button}>
            <img src={search} alt="Search" />
        </button>
    </div>
));

export default SearchInput;

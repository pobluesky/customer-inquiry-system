import React, { forwardRef } from 'react';
import search from '../../assets/css/icons/search.svg';
import { Offer_Table_Search_Input, Offer_Table_Input, Offer_Table_Button } from '../../assets/css/Input.css';

const SearchInput = forwardRef(({ onChange, value }, ref) => (
    <div className={Offer_Table_Search_Input}>
        <input className={Offer_Table_Input} ref={ref} value={value} onChange={onChange} type="text" />
        <button className={Offer_Table_Button}>
            <img src={search} alt="Search" />
        </button>
    </div>
));

// SearchInput.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default SearchInput;

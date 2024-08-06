import React, { forwardRef } from 'react';
import { Container, _Category, Input } from '../../assets/css/Member.css';

const JoinInput = forwardRef(({ onChange, category, placeholder, value }, ref) => (
    <div className={Container}>
        <div className={_Category}>
            {category}
        </div>
        <input className={Input} ref={ref} value={value} onChange={onChange} type="text" placeholder={placeholder} />
    </div>
));

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default JoinInput;

import React, { forwardRef } from 'react';
import { Input } from '../../assets/css/Offersheet.css';

const OfferTableInput = forwardRef(({ onChange, value }, ref) => (
    <>
        <input className={Input} ref={ref} value={value} onChange={onChange} type="text" />
    </>
));

// OfferTableInput.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default OfferTableInput;

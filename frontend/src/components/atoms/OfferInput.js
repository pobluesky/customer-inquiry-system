import React, { forwardRef } from 'react';
import { Offer_Input } from '../../assets/css/Input.css';

const OfferInput = forwardRef(({ onChange, value }, ref) => (
    <>
        <input className={Offer_Input} ref={ref} value={value} onChange={onChange} type="text" />
    </>
));

// OfferInput.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default OfferInput;

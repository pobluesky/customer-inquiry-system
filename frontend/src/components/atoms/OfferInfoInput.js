import React, { forwardRef } from 'react';
import { Info_Input } from '../../assets/css/Offersheet.css';

const OfferInput = forwardRef(({ onChange, value }, ref) => (
    <>
        <input className={Info_Input} ref={ref} value={value} onChange={onChange} type="text" />
    </>
));

// OfferInput.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default OfferInput;

import React, { forwardRef } from 'react';
import { Info_Input } from '../../assets/css/Offersheet.css';

const OfferInput = forwardRef(({ onChange, value, margin }, ref) => (
    <>
        <input className={Info_Input} ref={ref} value={value} onChange={onChange} type="text" style={{ margin: `${margin}` }}/>
    </>
));

// OfferInput.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default OfferInput;

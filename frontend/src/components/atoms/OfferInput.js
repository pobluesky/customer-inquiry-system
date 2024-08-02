import React, { forwardRef } from 'react';

const OfferInput = forwardRef(({ onChange, value }, ref) => (
    <div>
        <input ref={ref} value={value} onChange={onChange} type="text" style={{ borderStyle: 'none', outline: 'none' }} />
    </div>
));

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default OfferInput;

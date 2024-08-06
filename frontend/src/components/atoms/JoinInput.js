import React, { forwardRef } from 'react';
import '../../assets/css/Input.css';

const JoinInput = forwardRef(({ onChange, category, placeholder, value }, ref) => (
    <div style={{ marginTop: '4vh' }}>
        <div style={{ width: '360px', color: '#03507D', fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', marginBottom: '12px' }}>
            {category}
        </div>
        <input ref={ref} value={value} onChange={onChange} type="text" placeholder={placeholder} className="input" style={{ width: '336px', height: '48px', padding: '0 0 0 20px', border: 'solid #c1c1c1 1px', borderRadius: '12px', fontSize: '20px' }} />
    </div>
));

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default JoinInput;

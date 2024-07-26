import React from 'react';
import '../../assets/css/Input.css';

function Input({ category, placeholder }) {
    return (
        <div style={{ marginTop: '4vh' }}>
            <div style={{ width: '360px', color: '#03507D', fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', marginBottom: '12px' }}>
                {category}
            </div>
            <input type="text" placeholder={placeholder} className="input" style={{ width: '360px', height: '36px', border: 'solid #b5b5b2', borderRadius: '12px', fontSize: '20px' }} />
        </div>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Input;

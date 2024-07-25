import React from 'react';
// import PropTypes from 'prop-types';

function Input({ category, placeholder }) {
    return (
        <div>
            <div style={{ width: '360px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', marginBottom: '12px' }}>{category}</div>
            <input type="text" placeholder={placeholder} style={{ width: '360px', height: '48px', border: 'solid #b5b5b2', borderRadius: '4px', fontSize: '24px', marginBottom: '24px' }} />
        </div>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Input;

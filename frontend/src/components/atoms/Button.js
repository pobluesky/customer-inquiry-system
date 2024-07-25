import React from 'react';
// import PropTypes from 'prop-types';

function Button({ name, backgroundColor, textColor }) {
    return (
        <span>
            <button style={{ width: '168px', height: '48px', margin: '12px', backgroundColor: `${backgroundColor}`, color: `${textColor}`, border: 'solid #b5b5b2', borderRadius: '4px', fontSize: '24px' }}>
                {name}
            </button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

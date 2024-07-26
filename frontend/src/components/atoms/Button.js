import React from 'react';
// import PropTypes from 'prop-types';

function Button({ btnName, backgroundColor, textColor }) {
    return (
        <span>
            <button style={{ width: '168px', height: '36px', margin: '12px', backgroundColor: `${backgroundColor}`, color: `${textColor}`, border: 'solid #b5b5b2', borderRadius: '12px', fontSize: '20px' }}>
                {btnName}
            </button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

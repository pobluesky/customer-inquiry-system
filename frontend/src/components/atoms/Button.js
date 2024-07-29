import React from 'react';
// import PropTypes from 'prop-types';

function Button({ btnName, backgroundColor, textColor }) {
    return (
        <span>
            <button style={{ width: '168px', height: '44px', margin: '12px', backgroundColor: `${backgroundColor}`, color: `${textColor}`, border: 'solid #c1c1c1 1px', borderRadius: '12px', fontSize: '20px' }}>{btnName}</button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

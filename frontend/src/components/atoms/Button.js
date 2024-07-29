import React from 'react';
// import PropTypes from 'prop-types';

function Button({ onClick, btnName, width, height, margin, backgroundColor, textColor, borderRadius, fontSize }) {
    return (
        <span>
            <button onClick={onClick} style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, borderRadius: `${borderRadius}`, fontSize: `${fontSize}`, border: 'solid #c1c1c1 1px', cursor: 'pointer' }}>{btnName}</button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

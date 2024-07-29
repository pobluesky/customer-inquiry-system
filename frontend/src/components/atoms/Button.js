import React from 'react';
// import PropTypes from 'prop-types';

function Button({ btnName, width, height, margin, backgroundColor, textColor, borderRadius, fontSize }) {
    return (
        <span>
            <button style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, border: 'solid #c1c1c1 1px', borderRadius: `${borderRadius}`, fontSize: `${fontSize}` }}>{btnName}</button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

import React from 'react';
// import PropTypes from 'prop-types';

function Button({ onClick, btnName, width, height, margin, marginRight, marginLeft, backgroundColor, textColor, border, borderRadius, fontSize }) {
    return (
        <span>
            <button
                onClick={onClick}
                style={{ width: `${width}`,
                         height: `${height}`,
                         margin: `${margin}`,
                         marginRight: `${marginRight}`,
                         marginLeft: `${marginLeft}`,
                         backgroundColor: `${backgroundColor}`,
                         color: `${textColor}`,
                         fontSize: `${fontSize}`,
                         border: `${border}`,
                         borderRadius: `${borderRadius}`,
                         cursor: 'pointer'}}>
                {btnName}
            </button>
        </span>
    );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;

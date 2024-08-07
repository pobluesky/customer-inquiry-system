import React from 'react';
// import PropTypes from 'prop-types';

function Button({ onClick, btnName, width, height, margin, backgroundColor, textColor, border, borderRadius, display, fontSize }) {
  return (
      <span>
            <button
                onClick={onClick}
                style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, fontSize: `${fontSize}`, border: `${border}`, borderRadius: `${borderRadius}`, cursor: 'pointer'}}
            >
            {btnName}
            </button>
        </span>
  );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;
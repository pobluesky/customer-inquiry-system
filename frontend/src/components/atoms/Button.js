import React from 'react';
// import PropTypes from 'prop-types';

function Button({ onClick, btnName, width, height, margin, backgroundColor, textColor, border, borderRadius, fontSize }) {
  return (
            <button
                onClick={onClick}
                style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`, fontSize: `${fontSize}`, border: `${border}`, borderRadius: `${borderRadius}`, cursor: 'pointer'}}
            >
            {btnName}
            </button>
  );
}

// Header.propTypes = {
//     username: PropTypes.string.isRequired,
// };

export default Button;
import React from 'react';

// import PropTypes from 'prop-types';

function Button({
  btnName,
  onClick,
  width,
  height,
  margin,
  backgroundColor,
  textColor,
  fontSize,
  border,
  borderRadius,
  float,
  fontWeight,
  alignSelf,
  justifySelf
}) {
  return (
      <button
          onClick={onClick}
          style={{
            width: `${width}`,
            height: `${height}`,
            margin: `${margin}`,
            backgroundColor: `${backgroundColor}`,
            color: `${textColor}`,
            fontSize: `${fontSize}`,
            border: `${border}`,
            borderRadius: `${borderRadius}`,
            float: `${float}`,
            cursor: 'pointer',
            fontWeight: `${fontWeight}`,
            alignSelf: `${alignSelf}`,
            justifySelf: `${justifySelf}`,
          }}
      >
        {btnName}
      </button>
  );
}

// Button.propTypes = {
//     width: PropTypes.string.isRequired,
//     height: PropTypes.string.isRequired,
//     margin: PropTypes.string.isRequired,
//     backgroundColor: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     fontSize: PropTypes.string.isRequired,
//     border: PropTypes.string.isRequired,
//     borderRadius: PropTypes.string.isRequired,
//     float: PropTypes.string.isRequired,
//     disabled: PropTypes.string.isRequired,
//     cursor: PropTypes.string.isRequired
// };

export default Button;
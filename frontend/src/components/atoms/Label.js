import React from 'react';

function Label({
  label,
  width,
  height,
  backgroundColor,
  textColor,
  border,
  borderRadius
}) {
  return <div style={{
    width: `${width}`,
    height: `${height}`,
    backgroundColor: `${backgroundColor}`,
    color: `${textColor}`,
    border: `${border}`,
    borderRadius: `${borderRadius}`,
    textAlign: 'center',
    alignContent: 'center'
  }}>{label}</div>;
}

export default Label;

import React, {forwardRef} from 'react';

const Input = forwardRef(({
  onChange,
  value,
  placeholder,
  width,
  height,
  margin,
  padding,
  backgroundColor,
  textColor,
  border,
  borderRadius
}, ref) => <input ref={ref} value={value} onChange={onChange} type="text"
                  placeholder={placeholder} style={{
  width: `${width}`,
  height: `${height}`,
  margin: `${margin}`,
  padding: `${padding}`,
  backgroundColor: `${backgroundColor}`,
  color: `${textColor}`,
  border: `${border}`,
  borderRadius: `${borderRadius}`
}}/>);

export default Input;

import React from 'react';
import { _Label, _text1, _text2 } from '../../assets/css/Inquiry.css';

const Label = ({text1, text2}) => {
  return (
      <div className={_Label}>
        <span className={_text1}>&nbsp;{text1}</span>
        <span className={_text2}>&nbsp;&nbsp;&nbsp;&nbsp;{text2}</span>
      </div>
  );
};

export default Label;
import React from 'react';

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
    justifySelf,
    padding,
}) {
    return (
        <button
            onClick={onClick}
            style={{
                width,
                height,
                margin,
                backgroundColor,
                color: textColor,
                fontSize,
                border,
                borderRadius,
                float,
                cursor: 'pointer',
                fontWeight,
                alignSelf,
                justifySelf,
                padding,
            }}
        >
            {btnName}
        </button>
    );
}

export default Button;

import React from 'react';

function Text({
    name,
    onClick,
    width,
    height,
    margin,
    padding,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    border,
    borderRadius,
    float,
    alignSelf,
    justifySelf,
}) {
    return (
        <div
            onClick={onClick}
            style={{
                width,
                height,
                margin,
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                border,
                borderRadius,
                float,
                cursor: 'default',
                alignSelf,
                justifySelf,
                padding,
            }}
        >
            {name}
        </div>
    );
}

export default Text;

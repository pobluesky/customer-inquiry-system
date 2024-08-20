import React from 'react';

function Button({
    btnName,
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
    boxShadow,
    float,
    alignSelf,
    alignItems,
    justifySelf,
    justifyContent,
    imgSrc,
    imgAlt,
    imgWidth,
    imgHeight,
    imgMargin,
    imgOnClick,
}) {
    return (
        <button
            onClick={onClick}
            style={{
                width,
                height,
                margin,
                padding,
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                border,
                borderRadius,
                boxShadow,
                float,
                cursor: 'pointer',
                alignSelf,
                alignItems,
                justifySelf,
                justifyContent,
            }}
        >
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    style={{
                        width: imgWidth,
                        height: imgHeight,
                        margin: imgMargin,
                    }}
                    onClick={imgOnClick}
                />
            )}
            {btnName}
        </button>
    );
}

export default Button;

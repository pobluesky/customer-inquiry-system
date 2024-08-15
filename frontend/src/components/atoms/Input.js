import React, { forwardRef } from 'react';

const Input = forwardRef(
    (
        {
            needCategory,
            categoryName,
            categoryWidth,
            categoryColor,
            CategoryFontWeight,
            categoryMargin,
            categoryTextAlign,

            needWarningMsg,
            warningMsg,

            placeholder,
            value,
            onChange,
            type,
            width,
            height,
            margin,
            padding,
            backgroundColor,
            textColor,
            border,
            borderRadius,
            fontSize,
        },
        ref,
    ) => (
        <div>
            {needCategory ? (
                <div
                    style={{
                        width: `${categoryWidth}`,
                        color: `${categoryColor}`,
                        fontWeight: `${CategoryFontWeight}`,
                        margin: `${categoryMargin}`,
                        textAlign: `${categoryTextAlign}`,
                    }}
                >
                    {categoryName}&nbsp;&nbsp;&nbsp;
                    {needWarningMsg ? (
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#ff4d4d',
                            }}
                        >
                            {warningMsg}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                ''
            )}
            <form><input
                ref={ref}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    margin: `${margin}`,
                    padding: `${padding}`,
                    backgroundColor: `${backgroundColor}`,
                    color: `${textColor}`,
                    border: `${border}`,
                    borderRadius: `${borderRadius}`,
                    fontSize: `${fontSize}`,
                }}
                autoComplete='off'
            /></form>
        </div>
    ),
);

export default Input;

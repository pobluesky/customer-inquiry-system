import React, { forwardRef } from 'react';

const Input = forwardRef(
    (
        {
            needCategory,
            categoryName,
            categoryWidth,
            categoryColor,
            categoryFontWeight,
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
            float,
        },
        ref,
    ) => (
        <div>
            {needCategory ? (
                <div
                    style={{
                        width: categoryWidth,
                        color: categoryColor,
                        fontWeight: categoryFontWeight,
                        margin: categoryMargin,
                        textAlign: categoryTextAlign,
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
            <form>
                <input
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    style={{
                        width,
                        height,
                        margin,
                        padding,
                        backgroundColor,
                        color: textColor,
                        border,
                        borderRadius,
                        fontSize,
                        float,
                    }}
                    autoComplete="off"
                />
            </form>
        </div>
    ),
);

export default Input;

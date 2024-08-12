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

            placeholder,
            value,
            onChange,
            width,
            height,
            margin,
            padding,
            backgroundColor,
            textColor,
            border,
            borderRadius,
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
                    {categoryName}
                </div>
            ) : (
                ''
            )}
            <input
                ref={ref}
                value={value}
                onChange={onChange}
                type="text"
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
                }}
            />
        </div>
    ),
);

export default Input;

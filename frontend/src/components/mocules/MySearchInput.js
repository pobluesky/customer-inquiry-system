import React, { forwardRef } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import search from '../../assets/css/icons/search.svg';

const MySearchInput = forwardRef(
    (
        {
            width,
            height,
            margin,
            padding,
            border,
            borderRadius,
            onChange,
            value,
            imgWidth,
            imgHeight,
            imgMargin,
            imgOnClick,
            btnHeight,
            btnMargin,
        },
        ref,
    ) => (
        <div>
            <Input
                width={width}
                height={height}
                margin={margin}
                padding={padding}
                border={border}
                borderRadius={borderRadius}
                float={'left'}
                type="text"
                ref={ref}
                value={value}
                onChange={onChange}
            />
            <Button
                imgSrc={search}
                imgAlt={'검색 버튼'}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                imgMargin={imgMargin}
                imgOnClick={imgOnClick}
                height={btnHeight}
                margin={btnMargin}
                backgroundColor={'transparent'}
                border={'none'}
                boxShadow={'none'}
                borderRadius={'0'}
            />
        </div>
    ),
);

export default MySearchInput;

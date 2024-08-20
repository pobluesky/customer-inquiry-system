import React from 'react';
import Button from '../atoms/Button';

const CheckButton = ({ btnName, onClick, margin }) => (
    <Button
        btnName={btnName}
        onClick={onClick}
        margin={margin}
        width={'360px'}
        height={'44px'}
        backgroundColor={'#03507d'}
        textColor={'#eeeeee'}
        border={'none'}
        borderRadius={'12px'}
        fontSize={'20px'}
    />
);

const RoleSelectButton = ({ btnName, onClick, margin }) => (
    <Button
        btnName={btnName}
        onClick={onClick}
        margin={margin}
        width={'144px'}
        height={'44px'}
        backgroundColor={'#ffffff'}
        textColor={'#000000'}
        border={'solid 1px #c1c1c1'}
        borderRadius={'12px'}
        fontSize={'20px'}
    />
);

export { CheckButton, RoleSelectButton };

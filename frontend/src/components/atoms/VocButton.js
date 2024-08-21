import React from 'react';
import Input from './Input';
import Button from './Button';

const FilterButton = ({
    btnName,
    margin,
    backgroundColor,
    textColor,
    onClick,
}) => (
    <Button
        btnName={btnName}
        width={'84px'}
        height={'28px'}
        margin={margin}
        backgroundColor={backgroundColor}
        textColor={textColor}
        border={'solid 1px #c1c1c1'}
        borderRadius={'20px'}
        onClick={onClick}
    />
);

const AnswerTitleInput = ({ title, titleChange }) => (
    <Input
        value={title}
        onChange={titleChange}
        width={'852px'}
        height={'36px'}
        margin={'0 0 0 20px'}
        padding={'0px'}
        borderRadius={'12px'}
    />
);

const AnswerContentInput = ({ contents, contentChange }) => (
    <Input
        value={contents}
        onChange={contentChange}
        width={'852px'}
        height={'152px'}
        margin={'12px 0 0 20px'}
        padding={'0px'}
        borderRadius={'12px'}
    />
);

const AnswerContent = () => (
    <div
        style={{
            width: '852px',
            height: '204px',
            margin: '0 auto',
            fontSize: '24px',
            fontWeight: '600',
            color: '#6e6e6e',
            textAlign: 'center',
            lineHeight: '204px',
            border: 'solid 1px #c1c1c1',
            borderRadius: '12px',
            wordBreak: 'break-all',
            backgroundColor: '#d2f1ff',
        }}
    >
        답변 대기 중입니다.
    </div>
);

const CloseButton = ({ onClick }) => (
    <Button
        btnName={'닫기'}
        onClick={onClick}
        width={'96px'}
        height={'32px'}
        margin={'0 0 24px 0'}
        backgroundColor={'#2f4f79'}
        textColor={'#ffffff'}
        border={`none`}
        borderRadius={'10px'}
        float={'right'}
    />
);

const AnswerButton = ({ btnName, onClick }) => (
    <Button
        btnName={btnName}
        onClick={onClick}
        width={'96px'}
        height={'32px'}
        margin={'0 24px 24px 0'}
        backgroundColor={'#2f4f79'}
        textColor={'#ffffff'}
        border={`none`}
        borderRadius={'10px'}
        float={'right'}
    />
);

export {
    FilterButton,
    AnswerTitleInput,
    AnswerContentInput,
    AnswerContent,
    CloseButton,
    AnswerButton,
};

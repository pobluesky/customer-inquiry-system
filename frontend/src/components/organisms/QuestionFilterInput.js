import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Question_Filter_Input } from '../../assets/css/Voc.css';

function QuestionFilterInput({
    title,
    startDate,
    endDate,
    questionNo,
    customerName,

    setTitle,
    setStartDate,
    setEndDate,
    setQuestionNo,
    setCustomerName,

    searchCount,
    setTimeFilter,
    setStatusFilter,
    setTypeFilter,
}) {
    return (
        <div className={Question_Filter_Input}>
            <Button
                btnName={'최신순'}
                width={'84px'}
                height={'36px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                backgroundColor={'#ffffff'}
            />
            <select
                name="type"
                id="type"
                onChange={(e) => selectTypeFilter(e.target.value)}
            >
                <option value="" disabled selected>
                    문의 유형
                </option>
                <option value="INQ">Inquiry</option>
                <option value="SITE">사이트</option>
                <option value="ETC">기타</option>
            </select>
            <Input
                type={'text'}
                width={'84px'}
                height={'32px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                padding={'0 8px 0 8px'}
                placeholder={'문의 번호'}
            />
            <Input
                type={'text'}
                width={'180px'}
                height={'32px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                padding={'0 8px 0 8px'}
                placeholder={'문의 제목을 검색하세요.'}
            />
            <Input
                type={'text'}
                width={'180px'}
                height={'32px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                padding={'0 8px 0 8px'}
                placeholder={'고객사명을 검색하세요.'}
            />
            <Input
                type={'date'}
                width={'180px'}
                height={'32px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                padding={'0 8px 0 8px'}
            />
            <Input
                type={'date'}
                width={'180px'}
                height={'32px'}
                border={'solid 1px #c1c1c1'}
                borderRadius={'8px'}
                outline={'none'}
                padding={'0 8px 0 8px'}
            />
        </div>
    );
}

export default QuestionFilterInput;

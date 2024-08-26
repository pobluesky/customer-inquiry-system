import React, { useState } from 'react';
import {
    _InquirySearch,
    _InquirySearchBox,
    _Text,
    _SearchBox,
    _Title,
    _Input,
    _Date
} from '../../../assets/css/Inquiry.css';
import SelectBox from '../../atoms/SelectBox';
import Button from '../../atoms/Button';
import ToggleButton from '../../atoms/ToggleButton';

const InquirySearchBox = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        productType: '',
        inquiryType: '',
        customerName: '',
        startDate: '',
        endDate: '',
        progress: '',
        sortBy: 'LATEST',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleToggleChange = (type, value) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            [type]: prevParams[type] === value ? '' : value,
        }));
    };

    const handleSortChange = (sortOrder) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            sortBy: sortOrder,
        }));
    };

    const handleSearch = () => {
        onSearch(searchParams);
    };

    const progressOptions = [
        { label: '문의접수', value: 'RECEIPT' },
        { label: '1차검토완료', value: 'FIRST_REVIEW' },
        { label: '품질검토요청', value: 'QUALITY_REVIEW' },
        { label: '최종검토완료', value: 'FINAL_REVIEW' },
    ];

    const sortOptions = [
        { label: '최신순', value: 'LATEST' },
        { label: '과거순', value: 'OLDEST' },
    ];

    const productTypeOptions = [
        { label: 'ALL', value: '' },
        { label: '자동차', value: 'CAR' },
        { label: '열연', value: 'HOT_ROLLED' },
        { label: '냉연', value: 'COLD_ROLLED' },
        { label: '후판', value: 'THICK_PLATE' },
        { label: '선재', value: 'WIRE_ROD' },
    ];

    const inquiryTypeOptions = [
        { label: 'ALL', value: '' },
        { label: '견적 문의', value: 'QUOTE_INQUIRY' },
        { label: '품질+견적 문의', value: 'COMMON_INQUIRY' },
    ];

    return (
        <div className={_InquirySearch}>
            <div className={_InquirySearchBox}>
                <p className={_Text}>Inquiry 조회 List</p>
                <div className={_SearchBox}>

                    <p className={_Title}>제품구분</p>
                    <SelectBox
                        options={productTypeOptions}
                        defaultValue={searchParams.productType}
                        onChange={(value) => handleSelectChange('productType',
                            value)}
                    />

                    <p className={_Title}>문의유형</p>
                    <SelectBox
                        options={inquiryTypeOptions}
                        defaultValue={searchParams.inquiryType}
                        onChange={(value) => handleSelectChange('inquiryType',
                            value)}
                    />

                    <p className={_Title}>고객사명</p>
                    <input
                        className={_Input}
                        name="customerName"
                        value={searchParams.customerName}
                        onChange={handleInputChange}
                    />

                    <p className={_Title}>판매계약자</p>
                    <input className={_Input} />

                    <p className={_Title}>영업담당자</p>
                    <input className={_Input} />

                    <p className={_Title}>접수기간</p>
                    <div style={{ display: 'flex', marginLeft: '25px' }}>
                        <input
                            className={_Date}
                            type="date"
                            name="startDate"
                            value={searchParams.startDate}
                            onChange={handleInputChange}
                        />
                        <div style={{ padding: '4px 10px 0 10px' }}>~</div>
                        <input
                            className={_Date}
                            type="date"
                            name="endDate"
                            value={searchParams.endDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div style={{ display: 'flex', margin: '5px 20px 10px 0' }}>
                        {sortOptions.map((option) => (
                            <ToggleButton
                                width={'70px'}
                                key={option.value}
                                btnName={option.label}
                                isActive={searchParams.sortBy === option.value}
                                onClick={() => handleSortChange(option.value)}
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', margin: '5px 5px 10px 0' }}>
                        {progressOptions.map((option) => (
                            <ToggleButton
                                width={'115px'}
                                key={option.value}
                                btnName={option.label}
                                isActive={searchParams.progress
                                    === option.value}
                                onClick={() => handleToggleChange('progress',
                                    option.value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Button
                btnName={'조회'}
                textColor={'#ffffff'}
                borderRadius={'17px'}
                width={'100px'}
                height={'35px'}
                fontWeight={'800'}
                fontSize={'15px'}
                backgroundColor={'#03507D'}
                border={'none'}
                alignSelf={'center'}
                onClick={handleSearch}
            />
        </div>
    );
};

export default InquirySearchBox;

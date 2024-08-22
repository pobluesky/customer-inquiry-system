import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import MySearchInput from './MySearchInput';
import { FilterButton } from '../atoms/VocButton';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Filter_Panel } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

function QuestionFilterPanel({
    searchedItems,
    title,
    startDate,
    endDate,
    customerName,
    questionNo,
    setTitle,
    setEndDate,
    setStartDate,
    setCustomerName,
    setQuestionNo,
    setTimeFilter,
    setStatusFilter,
    searchByFilter,
}) {
    const [selectedTimeFilter, setSelectedTimeFilter] = useState(null); // 'LATEST' 또는 'OLDEST'
    const [selectedStatusFilter, setSelectedStatusFilter] = useState(null); // 'READY' 또는 'COMPLETED'

    const thisRole = getCookie('userRole');
    const height = thisRole === 'CUSTOMER' ? '228px' : '288px';
    const gridTemplateRows =
        thisRole === 'CUSTOMER'
            ? '52px 52px 36px 32px' // isCustomer
            : '52px 52px 52px 36px 32px'; // isManager

    const clickTimeFilter = (filter) => {
        setSelectedTimeFilter(filter);
        setTimeFilter(filter);
    };

    const clickStatusFilter = (filter) => {
        setSelectedStatusFilter(filter);
        setStatusFilter(filter);
    };

    return (
        <>
            <div className={Question_Filter_Panel} style={{ height }}>
                <div style={{ gridTemplateRows }}>
                    {/* 아이콘 + 문의 조회 */}
                    <div>
                        <img src={search} />
                        <div>문의 조회</div>
                    </div>

                    {/* 문의 제목 + 문의 등록일 + 조회 버튼 */}
                    <div>
                        <div>
                            <div>문의 제목</div>
                            <MySearchInput
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                btnHeight={'24px'}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div>문의 등록일</div>
                            <Input
                                type={'date'}
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <div>~</div>
                            <Input
                                type={'date'}
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <Button
                                btnName={'조회'}
                                width={'84px'}
                                height={'28px'}
                                margin={'0 0 0 24px'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                border={'none'}
                                borderRadius={'20px'}
                                onClick={searchByFilter}
                            />
                        </div>
                    </div>

                    {/* [담당자 전용] 문의 번호 + 고객사명 */}
                    {thisRole !== 'CUSTOMER' && (
                        <div>
                            <div>
                                <div>문의 번호</div>
                                <MySearchInput
                                    width={'144px'}
                                    height={'24px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'8px'}
                                    outline={'none'}
                                    padding={'0 8px 0 8px'}
                                    btnHeight={'24px'}
                                    value={questionNo}
                                    onChange={(e) =>
                                        setQuestionNo(e.target.value)
                                    }
                                />
                                {/* 3 */}
                                <div>고객사명</div>
                                {/* 4 */}
                                <MySearchInput
                                    width={'144px'}
                                    height={'24px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'8px'}
                                    outline={'none'}
                                    padding={'0 8px 0 8px'}
                                    btnHeight={'24px'}
                                    value={customerName}
                                    onChange={(e) =>
                                        setCustomerName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    )}

                    {/* 정렬 버튼 */}
                    <div>
                        <div>정렬 조건</div>
                        <FilterButton
                            btnName={'최신순'}
                            onClick={() => clickTimeFilter('LATEST')}
                            backgroundColor={
                                selectedTimeFilter === 'LATEST'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedTimeFilter === 'LATEST'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'과거순'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickTimeFilter('OLDEST')}
                            backgroundColor={
                                selectedTimeFilter === 'OLDEST'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedTimeFilter === 'OLDEST'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'답변 대기'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('READY')}
                            backgroundColor={
                                selectedStatusFilter === 'READY'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedStatusFilter === 'READY'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'답변 완료'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('COMPLETED')}
                            backgroundColor={
                                selectedStatusFilter === 'COMPLETED'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedStatusFilter === 'COMPLETED'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                    </div>

                    {/* 검색 결과 개수 */}
                    <div>
                        검색 결과: 총 <div>{searchedItems}</div>건
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default QuestionFilterPanel;

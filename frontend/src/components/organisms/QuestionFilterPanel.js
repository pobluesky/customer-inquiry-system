import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import SearchInput from '../mocules/SearchInput';
import { FilterButton } from '../atoms/VocButton';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Filter_Panel } from '../../assets/css/Voc.css';
import { getCookie } from '../../apis/utils/cookies';

function QuestionFilterPanel({
    searchedItems,

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

    setTimeFilter,
    setStatusFilter,
    setTypeFilter,
}) {
    const [selectedTimeFilter, setSelectedTimeFilter] = useState(null); // 'LATEST' 또는 'OLDEST'
    const [selectedStatusFilter, setSelectedStatusFilter] = useState(null); // 'READY' 또는 'COMPLETED'
    const [, setSelectedTypeFilter] = useState(null); // 'INQ' 또는 'SITE' 또는 'ETC'

    const [tempTitle, setTempTitle] = useState(title);
    const [tempStartDate, setTempStartDate] = useState(startDate);
    const [tempEndDate, setTempEndDate] = useState(endDate);
    const [tempQuestionNo, setTempQuestionNo] = useState(questionNo);
    const [tempCustomerName, setTempCustomerName] = useState(customerName);
    const [tempTimeFilter, setTempTimeFilter] = useState(null); // 임시 필터 상태
    const [tempStatusFilter, setTempStatusFilter] = useState(null); // 임시 필터 상태
    const [tempTypeFilter, setTempTypeFilter] = useState(null); // 임시 필터 상태

    const role = getCookie('userRole');
    const height = role === 'CUSTOMER' ? '228px' : '288px';
    const gridTemplateRows =
        role === 'CUSTOMER'
            ? '52px 52px 36px 32px' // isCustomer
            : '52px 52px 52px 36px 32px'; // isManager

    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            startSearch();
        }
    };

    const clickTimeFilter = (filter) => {
        setTempTimeFilter(filter); // 임시 상태 업데이트
    };

    const clickStatusFilter = (filter) => {
        setTempStatusFilter(filter); // 임시 상태 업데이트
    };

    const selectTypeFilter = (filter) => {
        setTempTypeFilter(filter); // 임시 상태 업데이트
    };

    const startSearch = () => {
        setTitle(tempTitle);
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
        setQuestionNo(tempQuestionNo);
        setCustomerName(tempCustomerName);
        setTimeFilter(tempTimeFilter); // 임시 필터 상태로 업데이트
        setStatusFilter(tempStatusFilter); // 임시 필터 상태로 업데이트
        setTypeFilter(tempTypeFilter); // 임시 필터 상태로 업데이트
    };

    return (
        <>
            <div
                className={Question_Filter_Panel}
                style={{ height }}
                onKeyDown={enterKeyDown}
            >
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
                            <SearchInput
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                btnHeight={'24px'}
                                value={tempTitle}
                                onChange={(e) => setTempTitle(e.target.value)}
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
                                value={tempStartDate}
                                onChange={(e) =>
                                    setTempStartDate(e.target.value)
                                }
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
                                value={tempEndDate}
                                onChange={(e) => setTempEndDate(e.target.value)}
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
                                onClick={startSearch}
                            />
                        </div>
                    </div>

                    {/* [담당자 전용] 문의 번호 + 고객사명 */}
                    {role !== 'CUSTOMER' && (
                        <div>
                            <div>
                                <div>문의 번호</div>
                                <SearchInput
                                    width={'144px'}
                                    height={'24px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'8px'}
                                    outline={'none'}
                                    padding={'0 8px 0 8px'}
                                    btnHeight={'24px'}
                                    value={tempQuestionNo}
                                    onChange={(e) =>
                                        setTempQuestionNo(e.target.value)
                                    }
                                />
                                {/* 3 */}
                                <div>고객사명</div>
                                {/* 4 */}
                                <SearchInput
                                    width={'144px'}
                                    height={'24px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'8px'}
                                    outline={'none'}
                                    padding={'0 8px 0 8px'}
                                    btnHeight={'24px'}
                                    value={tempCustomerName}
                                    onChange={(e) =>
                                        setTempCustomerName(e.target.value)
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
                            margin={'0 12px 0 0'}
                            onClick={() => clickTimeFilter('LATEST')}
                            backgroundColor={
                                tempTimeFilter === 'LATEST'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                tempTimeFilter === 'LATEST'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'과거순'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickTimeFilter('OLDEST')}
                            backgroundColor={
                                tempTimeFilter === 'OLDEST'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                tempTimeFilter === 'OLDEST'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'답변 대기'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('READY')}
                            backgroundColor={
                                tempStatusFilter === 'READY'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                tempStatusFilter === 'READY'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'답변 완료'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('COMPLETED')}
                            backgroundColor={
                                tempStatusFilter === 'COMPLETED'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                tempStatusFilter === 'COMPLETED'
                                    ? '#ffffff'
                                    : '#000000'
                            }
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

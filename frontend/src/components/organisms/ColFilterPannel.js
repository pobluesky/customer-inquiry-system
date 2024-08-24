import React, { useState } from 'react';
import Button from '../atoms/Button';
import SearchInput from '../mocules/SearchInput';
import { FilterButton } from '../atoms/VocButton';
import search from '../../assets/css/icons/voc/search.svg';
import { Collaboration_Filter_Pannel } from '../../assets/css/Voc.css';

export default function ColFilterPanel({
    searchedItems,
    colNo,
    setColNo,
    colManager,
    setColManager,
    // setStartDate,
    // setEndDate,
    setTimeFilter,
    setStatusFilter,
    searchByFilter,
}) {
    const [selectedTimeFilter, setSelectedTimeFilter] = useState(null); // 'LATEST', 'OLDEST'
    const [selectedStatusFilter, setSelectedStatusFilter] = useState(null); // 'READY', 'INPROGRESS', 'COMPLETE', 'REFUSE'

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
            <div className={Collaboration_Filter_Pannel}>
                <div>
                    {/* 아이콘 + VoC 협업 조회 */}
                    <div>
                        <img src={search} />
                        <div>VoC 협업 조회</div>
                    </div>

                    {/* 문의 제목 + 문의 등록일 + 조회 버튼 */}
                    <div>
                        <div>
                            <div>협업 번호</div>
                            <SearchInput
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                btnHeight={'24px'}
                                value={colNo}
                                onChange={(e) => setColNo(e.target.value)}
                            />
                            <div>협업 담당자</div>
                            <SearchInput
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                btnHeight={'24px'}
                                value={colManager}
                                onChange={(e) => setColManager(e.target.value)}
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

                    {/* 정렬 버튼 */}
                    <div>
                        <div>정렬 조건</div>
                        <FilterButton
                            btnName={'최신순'}
                            width={'84px'}
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
                            width={'84px'}
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
                            btnName={'협업 요청 완료'}
                            width={'120px'}
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
                            btnName={'협업 진행 중'}
                            width={'120px'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('INPROGRESS')}
                            backgroundColor={
                                selectedStatusFilter === 'INPROGRESS'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedStatusFilter === 'INPROGRESS'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'협업 거절'}
                            width={'120px'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('REFUSE')}
                            backgroundColor={
                                selectedStatusFilter === 'REFUSE'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedStatusFilter === 'REFUSE'
                                    ? '#ffffff'
                                    : '#000000'
                            }
                        />
                        <FilterButton
                            btnName={'협업 완료'}
                            width={'120px'}
                            margin={'0 12px 0 0'}
                            onClick={() => clickStatusFilter('COMPLETE')}
                            backgroundColor={
                                selectedStatusFilter === 'COMPLETE'
                                    ? '#03507d'
                                    : '#ffffff'
                            }
                            textColor={
                                selectedStatusFilter === 'COMPLETE'
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

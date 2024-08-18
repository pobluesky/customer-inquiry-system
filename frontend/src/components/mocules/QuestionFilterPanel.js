import React, { useState } from 'react';
import Button from '../atoms/Button';
import MySearchInput from './MySearchInput';
import MyDateInput from './MyDateInput';
import { FilterButton } from './VocButton';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Filter_Panel } from '../../assets/css/Voc.css';
import { Datepicker } from '../../assets/css/Form.css';
import { getCookie } from '../../apis/utils/cookies';

function QuestionFilterPanel({
    totalItems,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setFilter,
    setSearchByTitle,
}) {
    const thisRole = getCookie('userRole');
    const height = thisRole === 'CUSTOMER' ? '228px' : '288px';
    const gridTemplateRows =
        thisRole === 'CUSTOMER'
            ? '52px 52px 36px 32px' // isCustomer
            : '52px 52px 52px 36px 32px'; // isManager
    const [curSearchTitle, setCurSearchTitle] = useState('');

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
                                value={curSearchTitle}
                                onChange={(e) =>
                                    setCurSearchTitle(e.target.value)
                                }
                                onClick={() => {
                                    setSearchByTitle(curSearchTitle);
                                }}
                            />
                            <div>문의 등록일</div>
                            <MyDateInput
                                checkDate={startDate}
                                setCheckDate={setStartDate}
                                className={Datepicker}
                            />
                            <div>~</div>
                            <MyDateInput
                                checkDate={endDate}
                                setCheckDate={setEndDate}
                                className={Datepicker}
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
                                onClick={() => {}}
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
                                />
                            </div>
                        </div>
                    )}

                    {/* 정렬 버튼 */}
                    <div>
                        <div>정렬 조건</div>
                        <FilterButton
                            btnName={'최신순'}
                            onClick={() => setFilter('latest')}
                        />
                        <FilterButton
                            btnName={'과거순'}
                            margin={'0 12px 0 0'}
                            onClick={() => setFilter('oldest')}
                        />
                        <FilterButton
                            btnName={'답변 대기'}
                            margin={'0 12px 0 0'}
                            onClick={() => setFilter('READY')}
                        />
                        <FilterButton
                            btnName={'답변 완료'}
                            margin={'0 12px 0 0'}
                            onClick={() => setFilter('COMPLETED')}
                        />
                    </div>

                    {/* 검색 결과 개수 */}
                    <div>
                        검색 결과: 총 <div>{totalItems}</div>건
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default QuestionFilterPanel;

import React from 'react';
import Button from '../atoms/Button';
import SearchInput from '../mocules/SearchInput';
import MyDateInput from '../mocules/MyDateInput';
import search from '../../assets/css/icons/voc/search.svg';
import { Manager_Question_Search } from '../../assets/css/Voc.css';

function ManagerQuestionSearchItem({ totalItems }) {
    return (
        <div className={Manager_Question_Search}>
            <div>
                {/* 아이콘 + 문의 조회 */}
                <div>
                    <img src={search} />
                    <div>문의 조회</div>
                </div>

                {/* 문의번호, 문의제목, 고객사명, 문의등록일 */}
                {/* 문의 제목 + 문의 등록일 + 조회 버튼 */}
                <div>
                    <div>
                        <div>
                            {/* 1 */}
                            <div>문의 번호</div>
                            {/* 2 */}
                            <SearchInput />
                            {/* 3 */}
                            <div>문의 제목</div>
                            {/* 4 */}
                            <SearchInput />
                        </div>
                        <div>
                            {/* 5 */}
                            <div>고객사명</div>
                            {/* 6 */}
                            <SearchInput />
                            {/* 7 */}
                            <div>문의 등록일</div>
                            {/* 8 */}
                            <MyDateInput />
                            {/* 9 */}
                            <div>~</div>
                            {/* 10 */}
                            <MyDateInput />
                            <Button
                                btnName={'조회'}
                                width={'84px'}
                                height={'28px'}
                                margin={'0 0 0 24px'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'20px'}
                            />
                        </div>
                    </div>
                </div>

                {/* 정렬 버튼 */}
                <div>
                    <div>정렬 조건</div>
                    <div>
                        <Button
                            btnName={'최신순'}
                            width={'84px'}
                            height={'28px'}
                            margin={'0 0 0 12px'}
                            backgroundColor={'#ffffff'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'20px'}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'과거순'}
                            width={'84px'}
                            height={'28px'}
                            margin={'0 0 0 12px'}
                            backgroundColor={'#ffffff'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'20px'}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'답변 대기'}
                            width={'84px'}
                            height={'28px'}
                            margin={'0 0 0 12px'}
                            backgroundColor={'#ffffff'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'20px'}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'답변 완료'}
                            width={'84px'}
                            height={'28px'}
                            margin={'0 0 0 12px'}
                            backgroundColor={'#ffffff'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'20px'}
                        />
                    </div>
                </div>

                {/* 검색 결과 개수 */}
                <div>
                    검색 결과: 총 <div>{totalItems}</div>건
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default ManagerQuestionSearchItem;

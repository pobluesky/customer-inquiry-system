import React from 'react';
import Button from '../atoms/Button';
import SearchInput from '../mocules/SearchInput';
import DateInput from '../mocules/DateInput';
import search from '../../assets/css/icons/voc/search.svg';
import { Search_Container, Search_Item_Container, Item_Center, Category_Gap, Category_Text, Title_Date, Date, Date_Input, _Sort, Search_List_Count } from '../../assets/css/Voc.css';

function SearchItem() {
    const listCount = 2;

    return (
        <div className={Search_Container}>
            <div className={Search_Item_Container}>

                {/* 아이콘 + 문의 조회 */}
                <div className={[Item_Center, Category_Gap].join(" ")}>
                    <img src={search} /><div className={Category_Text}>문의 조회</div>
                </div>

                {/* 문의 제목 + 문의 등록일 + 조회 버튼 */}
                <div className={Title_Date}>
                    <div className={Item_Center}>
                        <div>문의 제목</div>
                        <SearchInput />
                    </div>
                    <div className={Item_Center}>
                        <div className={Date}>문의 등록일</div>
                        <DateInput /><span className={Date_Input}>~</span><DateInput />
                    </div>
                    <div>
                    <Button btnName={'조회'} width={'84px'} height={'28px'} margin={'0 0 0 24px'} backgroundColor={'#03507d'} textColor={'#ffffff'} border={'solid 1px #c1c1c1'} borderRadius={'20px'} />
                </div>
                </div>

                {/* 정렬 버튼 */}
                <div className={[Item_Center, _Sort].join(" ")}>
                    <div>정렬 조건</div>
                    <Button btnName={'최신순'} width={'84px'} height={'28px'} margin={'0 0 0 12px'} backgroundColor={'#ffffff'} border={'solid 1px #c1c1c1'} borderRadius={'20px'} />
                    <Button btnName={'과거순'} width={'84px'} height={'28px'} margin={'0 0 0 12px'} backgroundColor={'#ffffff'} border={'solid 1px #c1c1c1'} borderRadius={'20px'} />
                    <Button btnName={'답변 대기'} width={'84px'} height={'28px'} margin={'0 0 0 12px'} backgroundColor={'#ffffff'} border={'solid 1px #c1c1c1'} borderRadius={'20px'} />
                    <Button btnName={'답변 완료'} width={'84px'} height={'28px'} margin={'0 0 0 12px'} backgroundColor={'#ffffff'} border={'solid 1px #c1c1c1'} borderRadius={'20px'} />
                </div>

                {/* 검색 결과 개수 */}
                <div className={Search_List_Count}>검색 결과: 총 <span>{listCount}</span>건</div>
            </div>
        </div>
    );
}

export default SearchItem;

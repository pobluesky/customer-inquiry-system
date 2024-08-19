import React from 'react';
import {_InquirySearch, _InquirySearchBox, _Text, _SearchBox, _Title, _Input} from '../../assets/css/Inquiry.css';
import SelectBox from "../atoms/SelectBox";
import Button from "../atoms/Button";
import MyDateInput from '../atoms/MyDateInput';

const InquirySearchBox = ({ startDate, endDate, setStartDate, setEndDate }) => {

  const options = [
    { label: 'ALL', value: 'all' },
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
      <div className={_InquirySearch}>
        <div className={_InquirySearchBox}>
          <p className={_Text}>Inquiry 조회 List</p>
          <div className={_SearchBox}>
            <p className={_Title}>제품구분</p>
            <SelectBox options={options} defaultValue={"all"}/>
            <p className={_Title}>Inquiry No.</p>
            <input className={_Input}/>
            <p className={_Title}>영업담당자</p>
            <input className={_Input}/>
            <p className={_Title}>고객사명</p>
            <input className={_Input}/>
            <p className={_Title}>project 명</p>
            <input className={_Input}/>
            <p className={_Title}>부서</p>
            <input className={_Input}/>
            <p className={_Title}>진행단계 구분</p>
            <SelectBox options={options} defaultValue={"all"}/>
            <p className={_Title}>판매계약자</p>
            <input className={_Input}/>
            <p className={_Title}>접수기간</p>
            <MyDateInput
                checkDate={startDate}
                setCheckDate={setStartDate}
            />
            <div>~</div>
            <MyDateInput
                checkDate={endDate}
                setCheckDate={setEndDate}
            />
          </div>
        </div>
        <Button btnName={"조회"} textColor={"#ffffff"} borderRadius={"17px"}
                width={"100px"} height={"35px"} fontWeight={"800"} fontSize={"15px"}
                backgroundColor={"#03507D"} border={"none"} alignSelf={"center"} />
      </div>
  );
};

export default InquirySearchBox;


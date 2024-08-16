import React from 'react';
import InquiryItem from '../../components/organisms/InquiryItem';
import dummyInquiryData from './dummyInquiryData';
import InqPath from "../../components/atoms/InqPath";
import InquirySearchBox from "../../components/organisms/InquirySearchBox";
import SearchResult from "../../components/mocules/SearchResult";
import {Link} from "react-router-dom";
import {_Link} from "../../assets/css/Inquiry.css";

const InqList = () => {
  return (
      <div>
        <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
        <InquirySearchBox />
        <SearchResult searchResult={"54"}/>

        {dummyInquiryData.map((inquiryData, index) => (
                <Link to="/inq-item" className={_Link}>
                  <InquiryItem key={index} inquiryData={inquiryData} />
                </Link>
          ))}
      </div>
  );
};

export default InqList;

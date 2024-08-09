import React from 'react';
import InquiryItem from '../../components/organisms/InquiryItem';
import Header from '../../components/mocules/Header';
import dummyInquiryData from './dummyInquiryData';
import Path from "../../components/atoms/Path";
import InquirySearchBox from "../../components/organisms/InquirySearchBox";
import SearchResult from "../../components/mocules/SearchResult";

const InqList = () => {
  return (
      <div>
        <Header login={true} inq={true} voc={false} dashboard={false} />
        <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
        <InquirySearchBox />
        <SearchResult searchResult={"54"}/>

        {dummyInquiryData.map((inquiryData, index) => (
                <InquiryItem key={index} inquiryData={inquiryData} />
          ))}
      </div>
  );
};

export default InqList;

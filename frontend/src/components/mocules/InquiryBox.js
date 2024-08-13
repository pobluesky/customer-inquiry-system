import React from 'react';
import {_InquiryBox, _Product, _Size} from '../../assets/css/Inquiry.css';
import Tag from "../atoms/Tag";
import Button from "../atoms/Button";
import styled from "styled-components";

const InquiryBox = ({
  inquiryId,
  inquiryType,
  salesPerson,
  customer,
  progress,
  productType,
  inquiryStandard,
  thickness,
  width
}) => {
  return (
      <div className={_InquiryBox}>
        <Text>{inquiryId}</Text>
        <Tag category={inquiryType} width={'105px'} height={'28px'}
             backgroundColor={'#2f4f79'} justifySelf={"center"} alignSelf={"center"}
             textColor={'#ffffff'} borderRadius={'15px'} fontWeight={'800'}/>
        <Text fontWeight={'900'}
              fontSize={'23px'}>{salesPerson}</Text>
        <Text fontWeight={'900'}
              fontSize={'23px'}>{customer}</Text>
        <div className={_Product}>
          <Text fontWeight={'800'} alignSelf={"start"}>{productType}</Text>
          <div className={_Size}>
            <Text>규격</Text>
            <Text>{inquiryStandard}</Text>
            <Text>두께</Text>
            <Text>{thickness}</Text>
            <Text>폭</Text>
            <Text>{width}</Text>
          </div>
        </div>
        <Button btnName={progress} width={'120px'} height={'40px'}
                backgroundColor={'#007AFF'} justifySelf={"center"} alignSelf={"center"}
                textColor={'#ffffff'} fontSize={'20px'} border={'none'}
                borderRadius={'16px'} cursor={'pointer'} fontWeight={'900'} />
      </div>
  );
};

export default InquiryBox;

const Text = styled.p`
  color: #49454F;
  font-size: ${(props) => (props.fontSize)};
  font-weight: ${(props) => (props.fontWeight)};
  margin: ${(props) => (props.margin)};
  justify-self: center;
  align-self: ${(props) => (props.alignSelf || "center")};
`;

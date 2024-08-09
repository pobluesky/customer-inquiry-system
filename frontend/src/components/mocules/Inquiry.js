import React from 'react';
import {_Inquiry, _Product, _Size} from '../../assets/css/Inquiry.css';
import Tag from "../atoms/Tag";
import styled from "styled-components";
import Button from "../atoms/Button";

const Inquiry = ({
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
      <div className={_Inquiry}>
        <Text margin={'35px 60px 0 -15px'}>{inquiryId}</Text>
        <Tag category={inquiryType} width={'105px'} height={'28px'}
             margin={'30px 40px 0 -15px'} backgroundColor={'#2f4f79'}
             textColor={'#ffffff'} borderRadius={'15px'} textWeight={'800'}/>
        <Text margin={'28px 0 0 10px'} fontWeight={'900'}
              fontSize={'25px'}>{salesPerson}</Text>
        <Text margin={'28px 0 0 20px'} fontWeight={'900'}
              fontSize={'25px'}>{customer}</Text>
        <div className={_Product}>
          <Text fontWeight={'800'}>{productType}</Text>
          <div className={_Size}>
            <Text>규격</Text>
            <Text>{inquiryStandard}</Text>
            <Text>두께</Text>
            <Text>{thickness}</Text>
            <Text>폭</Text>
            <Text>{width}</Text>
          </div>
        </div>
        <Button btnName={progress} width={'110px'} height={'40px'}
                margin={'26px 0 0 35px'} backgroundColor={'#007AFF'}
                textColor={'#ffffff'} fontSize={'20px'} border={'none'}
                borderRadius={'16px'} cursor={'pointer'} fontWeight={'900'} /></div>
  );
};

export default Inquiry;

const Text = styled.p`
  color: #49454F;
  font-size: ${(props) => (props.fontSize)};
  font-weight: ${(props) => (props.fontWeight)};
  margin: ${(props) => (props.margin)};
`;

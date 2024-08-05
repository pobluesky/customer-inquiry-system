import React from 'react';
import Header from "../../../components/mocules/Header";
import intro from "../../../assets/css/icons/intro/intro-icon.svg";
import Button from "../../../components/atoms/Button";
import { Container, SubTitle, Title, Wrapper, Icon } from "./Style";
import { ScrollStyle } from "./ScrollStyle";
import {useNavigate} from "react-router-dom";
// import useScrollAnimation from "../../../hooks/UseScrollAnimation";

const FirstIntro = () => {
  const navigate = useNavigate();
  // useScrollAnimation();

  return (
      <div className={ScrollStyle}>
        <Header login={true} inq={false} voc={true} dashboard={false} />
        <Container style={{ margin: '10vh' }}>
          <SubTitle>고객 맞춤형 AI 기반 분석 솔루션</SubTitle>
          <Title>고객사와 함께하는 VoC</Title>

          <Wrapper>
            <Icon src={intro} alt="intro-icon" width={'50%'} zIndex={'-1'} marginTop={'-6vh'}/>
          </Wrapper>

          <Button
              onClick={() => navigate('/inq')}
              btnName={'Inquiry 시작하기 ►'}
              width={'250px'}
              height={'60px'}
              marginBottom={'12vh'}
              marginTop={'-10vh'}
              marginRight={'3vh'}
              fontWeight={'bolder'}
              fontSize={'26px'}
              border={'solid #c1c1c1 1px'}
              borderRadius={'20px'}
              textColor={'#3A70C2'}
          />

          <Button
              onClick={() => navigate('/voc')}
              btnName={'VoC 시작하기 ►'}
              width={'250px'}
              height={'60px'}
              marginBottom={'12vh'}
              marginTop={'-10vh'}
              fontWeight={'bolder'}
              fontSize={'26px'}
              border={'solid #c1c1c1 1px'}
              borderRadius={'20px'}
              textColor={'#00B0FF'}
          />
        </Container>
      </div>
  );
};

export default FirstIntro;
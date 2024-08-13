import React from 'react';
import Button from "../../components/atoms/Button";
import Header from "../../components/mocules/Header";
import VocPath from "../../components/atoms/VocPath";
import { intro1, intro2 } from "../../assets/css/icons/intro";
import {
  IntroBox,
  IntroIcon,
  Text,
  Title,
  Wrapper
} from "../intro/section/Style";
import { _IntroMain } from "../../assets/css/Inquiry.css";
import {useNavigate} from "react-router-dom";

const VocMain = () => {
  const navigate = useNavigate();

  return (
      <div>
        <Header login={true} inq={false} voc={true} dashboard={false} />
        <VocPath largeCategory={'Voc'} mediumCategory={'문의목록'} />
        <div className={_IntroMain}>
          <Title marginTop={"7vh"}>고객사와 함께하는 BLUESKY</Title>
          <Text color={'#49454F'} fontSize={'24px'} marginTop={'2vh'}>
            의뢰를 해주시면 신속하게 답변드리겠습니다.</Text>
        <Wrapper>
          <IntroBox>
            <IntroIcon src={intro1} alt={intro1} />
            <Text textAlign={'left'} marginTop={'1vh'} marginLeft={'3vh'}
                  fontSize={'24px'} fontWeight={'800'} color={'#4F95F4'}
                  lineHeight={'40px'}>AI 인식 문의 요약<br/>
            </Text>
            <Text marginTop={'1.5vh'} marginLeft={'3vh'} fontSize={'22px'}
                  lineHeight={'35px'} fontWeight={'350'} color={'#49454F'}>
              어떤 정보를 어느 곳에 작성해야할 지<br/>
              헷갈린다면 활용해 보세요
            </Text>
          </IntroBox>
          <IntroBox>
            <IntroIcon src={intro2} alt={intro2} />
            <Text textAlign={'left'} marginTop={'1vh'} marginLeft={'3vh'}
                  fontSize={'24px'} fontWeight={'800'} color={'#4F95F4'}
                  lineHeight={'40px'}>데이터 기반 문의 유형<br/>
            </Text>
            <Text marginTop={'1.5vh'} marginLeft={'3vh'} fontSize={'22px'}
                  lineHeight={'35px'} fontWeight={'350'} color={'#49454F'}>
              제품 유형별 데이터를<br/>
              한 눈에 볼 수 있어요
            </Text>
          </IntroBox>
        </Wrapper>
          <Button
              onClick={() => navigate('/inq-form')}
              btnName={'Voc 문의하기 ►'}
              width={'250px'}
              height={'60px'}
              margin={'10vh 0 0 0'}
              fontWeight={'bolder'}
              fontSize={'26px'}
              border={'solid #c1c1c1 1px'}
              borderRadius={'20px'}
              textColor={'#ffffff'}
              backgroundColor={'#03507D'}
          />
        </div>
      </div>
  );
};

export default VocMain;
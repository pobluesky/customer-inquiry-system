import React from 'react';
import { Container, Text, Title, Wrapper, AIBox, MiddleAIBox, SmallAIBox, Icon, CustomerWrapper, HighLighter } from "./Style";
import { hammer, gear } from "../../../assets/css/icons/intro";
// import useScrollAnimation from "../../../hooks/UseScrollAnimation";

const ThirdIntro = () => {
  // useScrollAnimation();

  return (
      <div>
        <Container style={{ margin: '20vh' }}>
          <Title>반복되는 입력 작업은</Title>
          <Title style={{color: '#4F95F4'}}>AI에게 맡기세요</Title>

          <Text color={'#49454F'} fontSize={'24px'} marginTop={'3.5vh'}>
            어떤 정보를 어느 곳에 작성해야할 지 헷갈린다면 활용해 보세요
          </Text>

          <Wrapper>
            <AIBox>
              <Title
                  style={{fontSize: '40px', color: '#49454F', padding: '4vh'}}>
                똑똑한 AI가 상담 데이터에서<br/>
                핵심을 찾아 정리해드립니다.
              </Title>
              <MiddleAIBox>
                <SmallAIBox>
                  <CustomerWrapper>
                    <Icon src={gear} alt={gear}
                          marginLeft={'2vh'} marginTop={'2vh'}/>
                    <Text fontWeight={'bolder'} color={'#49454F'}
                          marginLeft={'1vh'} marginTop={'2vh'}>현대종합상사(주)</Text>
                  </CustomerWrapper>
                  <Text marginTop={'0.5vh'} marginLeft={'5vh'} fontSize={'14px'}
                        textAlign={'left'} color={'#49454F'} fontWeight={'500'}>
                    <HighLighter backgroundColor={'#FAE389'} padding={'1px'}>SPCE
                      규격</HighLighter>에&nbsp;
                    <HighLighter backgroundColor={'#ACE9C8'} padding={'1px'}>두께와
                      폭은 3과 1250,</HighLighter>
                    <br/>
                    <HighLighter backgroundColor={'#DAD3FC'}
                                 padding={'1px'}>육상플랜트</HighLighter>
                    로 제품 문의드립니다.</Text>
                  <CustomerWrapper>
                    <Icon src={hammer} alt={hammer}
                          marginLeft={'2vh'} marginTop={'2vh'}/>
                    <Text fontWeight={'bolder'} color={'#49454F'}
                          marginLeft={'1vh'} marginTop={'2vh'}>삼성물산(주)</Text>
                  </CustomerWrapper>
                  <Text marginTop={'0.5vh'} marginLeft={'5vh'} fontSize={'14px'}
                        textAlign={'left'} color={'#49454F'} fontWeight={'500'}>
                    <HighLighter backgroundColor={'#DAD3FC'} padding={'1px'}>열연
                      일반 제품</HighLighter>으로&nbsp;
                    <HighLighter backgroundColor={'#FAE389'} padding={'1px'}>SAE
                      1006 규격</HighLighter>
                    <br/>
                    제품 요청드려도 괜찮을까요?</Text>
                </SmallAIBox>
                <CustomerWrapper>
                  <Text color={'#49454F'} fontSize={'24px'} lineHeight={'60px'}
                        textAlign={'left'}
                        marginLeft={'5vh'} marginTop={'7vh'}
                        fontWeight={'bolder'}>
                    AI가 자동으로&nbsp;
                    <HighLighter backgroundColor={'#DAD3FC'} padding={'10px'}
                                 borderRadius={'10px'}>
                      제품 유형
                    </HighLighter>
                    &nbsp;을 찾고<br/>
                    <HighLighter backgroundColor={'#ACE9C8'} padding={'10px'}
                                 borderRadius={'10px'}>
                      두께와 폭
                    </HighLighter>
                    &nbsp;을 확인하고<br/>
                    <HighLighter backgroundColor={'#FAE389'} padding={'10px'}
                                 borderRadius={'10px'}>
                      규격
                    </HighLighter>
                    &nbsp;까지 맞춰드려요<br/>
                  </Text>
                </CustomerWrapper>
              </MiddleAIBox>
            </AIBox>
          </Wrapper>

        </Container>
      </div>
  );
};

export default ThirdIntro;
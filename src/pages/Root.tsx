import styled from '@emotion/styled';
import React from 'react';

const Root: React.FC = () => {
  return (
    <Container>
      <SidebarContainer>
        <Logo src={require('../assets/logo.svg')} />
        <SidebarMiddleSection>
          <SidebarTitle>
            안녕하세요! <br />
            <b>
              당신을 위한 주차 공간 안내,
              <br />
              <strong>머지포인트</strong>입니다.
            </b>
          </SidebarTitle>
          <AlertBox>
            <AlertBoxIcon src={require('../assets/alert-box-icn.svg')} />
            <AlertBoxContents>
              방금까지 5명이나 25초 만에 가입을 했어요!
            </AlertBoxContents>
          </AlertBox>
          <SnsLoginButton src={require('../assets/sns-apple-button.svg')} />
          <SnsLoginButton src={require('../assets/sns-google-button.svg')} />
        </SidebarMiddleSection>
        <PoweredByWrap>
          <PoweredByText>POWERED BY</PoweredByText>
          <PoweredByLogo src={require('../assets/autocrypt-logo.svg')} />
        </PoweredByWrap>
      </SidebarContainer>
      <BackgroundContainer />
    </Container>
  );
};

export default Root;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;

  padding: 128px;
`;

const BackgroundContainer = styled.div`
  flex: 6;
  background-image: url(${require('../assets/login-background.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Logo = styled.img`
  width: 200px;
`;

const SidebarMiddleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarTitle = styled.span`
  display: block;
  font-size: 48px;
  font-weight: normal;
  letter-spacing: -1.8px;
  color: #212121;
  line-height: 1.3;
  margin-bottom: 24px;
  & strong {
    color: #fd146a;
  }
  & > b {
    font-weight: bold;
  }
`;

const AlertBox = styled.div`
  width: 100%;
  max-width: 376px;

  display: flex;
  align-items: center;
  padding: 9px 8px;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

const AlertBoxIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

const AlertBoxContents = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.6px;
  color: #fd146a;
`;

const SnsLoginButton = styled.img`
  width: 100%;
  max-width: 376px;
  cursor: pointer;
  margin-top: 16px;
`;

const PoweredByWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const PoweredByText = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.6px;
  color: #212121;
  margin-bottom: 16px;
`;

const PoweredByLogo = styled.img`
  width: 197px;
`;

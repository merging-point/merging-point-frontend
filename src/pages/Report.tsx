import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export default () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 760);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 760);
    });
  }, []);
  return (
    <Container>
      <SidebarContainer>
        <SubTitle>불법 주차 신고하기</SubTitle>
        <ReportForm>
          <Title>
            이름과 전화번호를 입력후,
            <br />
            사진을 첨부해주세요.
          </Title>
          <TextAreaContainer>
            <TextArea placeholder="이름을 입력해주세요." />
            <TextArea placeholder="전화번호를 입력해주세요." />
            <TextArea placeholder="사진 파일을 첨부해주세요." />
          </TextAreaContainer>
          <ReportBtn type="button" value="신고 완료하기"></ReportBtn>
        </ReportForm>
      </SidebarContainer>
      {!isMobile && <BackgroundContainer />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;

  padding: 128px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const BackgroundContainer = styled.div`
  flex: 6;
  background-image: url(${require('../assets/login-background.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const SubTitle = styled.span`
  width: 268px;
  font-family: NotoSansKR;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1.3px;
  color: #212121;
  margin: 0 0 40px 0;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 24px 0;
  }
`;

const ReportForm = styled.div`
  /* width: calc(100% - 256px ); */
`;
const Title = styled.p`
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -1.8px;
  color: #212121;
  margin: 0 0 48px 0;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 21px 0;
  }
`;
const TextAreaContainer = styled.div`
  margin: 0 0 32px 0;
  @media only screen and (max-width: 768px) {
    margin: 0 0 104px 0;
  }
`;
const TextArea = styled.input`
  width: calc(100% - 36px);
  height: 69px;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  border: none;
  margin: 0 0 40px 0;
  box-shadow: inset 0 0 0 2px #afafaf;
  padding: 0 0 0 32px;

  &:focus {
    box-shadow: inset 0 0 0 2px #fd146a;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 45px;
    font-size: 14px;
    margin: 0 0 24px 0;
    padding: 0 0 0 17px;
  }
`;
const ReportBtn = styled.input`
  width: 100%;
  height: 69px;
  border-radius: 8px;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.8px;
  outline: none;
  color: #ffffff;
  background-color: #000000;

  @media only screen and (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }
`;

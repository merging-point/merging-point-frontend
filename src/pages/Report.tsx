import styled from '@emotion/styled';
import React from 'react';

const Root: React.FC = () => {
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
            <TextArea placeholder="이름을 입력해주세요."></TextArea>
            <TextArea placeholder="전화번호를 입력해주세요."></TextArea>
            <TextArea placeholder="사진 파일을 입력해주세요."></TextArea>
          </TextAreaContainer>
          <ReportBtn type="button" value="신고 완료하기"></ReportBtn>
        </ReportForm>
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
  justify-content: center;
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

const SubTitle = styled.span`
  width: 268px;
  height: 52px;
  font-family: NotoSansKR;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1.3px;
  color: #212121;
  margin: 0 0 40px 0;
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
`;
const TextAreaContainer = styled.div`
  margin: 0 0 32px 0;
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
`;

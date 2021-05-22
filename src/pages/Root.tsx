import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';

import api from '../utils/api';
import Logo from '../components/Logo';

const Root: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await api.post('/token', data);
      localStorage.setItem('token', JSON.stringify(res.data));
      if (res.status === 200) {
        document.location.replace('/main');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <SidebarContainer>
        <Logo />
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
          <form onSubmit={handleSubmit(onSubmit)} encType="application/json">
            <TextAreaContainer>
              <TextArea
                placeholder="아이디를 입력해주세요."
                {...register('username', { required: true })}
              />
              <TextArea
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register('password', { required: true })}
              />
            </TextAreaContainer>
            <ReportBtn type="submit" value="접속하기" />
          </form>
        </SidebarMiddleSection>
        <SpaceBetween>
          <SubTitle>가입되신 계정이 없으신가요?</SubTitle>
          <ClickTitle onClick={() => document.location.replace('/register')}>
            회원가입
          </ClickTitle>
        </SpaceBetween>
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

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 376px;
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #9a9a9a9a;
`;

const ClickTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #9a9a9a9a;

  cursor: pointer;
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

const TextAreaContainer = styled.div`
  margin: 0 0 32px 0;
  @media only screen and (max-width: 768px) {
    margin: 0 0 104px 0;
  }
`;

const TextArea = styled.input`
  width: 100%;
  max-width: 376px;
  cursor: pointer;
  height: 55px;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  border: none;
  margin-top: 16px;
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
  height: 55px;
  max-width: 376px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.8px;
  outline: none;
  color: #ffffff;
  background-color: #000000;
  margin-top: 16px;

  @media only screen and (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }
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

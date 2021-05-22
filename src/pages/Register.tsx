import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import api from '../utils/api';

const Register = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();

  const disabledPerson = [
    { id: 0, value: '장애등급을 선택해주세요.', selected: true },
    { id: 1, value: '1급' },
    { id: 2, value: '2급' },
    { id: 3, value: '3급' },
    { id: 4, value: '4급' },
    { id: 5, value: '5급' },
    { id: 6, value: '6급' },
  ];

  const onSubmit = async (data: any) => {
    try {
      const res = await api.post('/users/register', data);
      if (res.status === 201) {
        document.location.replace('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => setIsMobile(navigator.userAgent.indexOf('Mobi') > -1), []);
  return (
    <Container>
      <SidebarContainer>
        <SubTitle>머지포인트 가입하기</SubTitle>
        <ReportForm>
          <Title></Title>
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
              <TextArea
                placeholder="이름을 입력해주세요."
                {...register('name', { required: true })}
              />
              <TextArea
                type="number"
                placeholder="전화번호를 입력해주세요."
                {...register('phone_number', { required: true })}
              />
              <Select {...register('disability_grade', { required: true })}>
                {disabledPerson.map((item) => (
                  <Option value={item.id} selected={item.selected}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </TextAreaContainer>
            <ReportBtn type="submit" value="신고 완료하기" />
          </form>
        </ReportForm>
      </SidebarContainer>
      {!isMobile && <BackgroundContainer />}
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Select = styled.select`
  width: calc(100% - 36px);
  height: 69px;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  border: none;
  margin: 0 0 40px 0;
  box-shadow: inset 0 0 0 2px #afafaf;
  background: none;
  padding: 0 0 0 32px;

  appearance: none;
  --webkit-appearance: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 45px;
    font-size: 14px;
    margin: 0 0 24px 0;
    padding: 0 0 0 17px;
  }
`;

const Option = styled.option``;

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
  border: none;
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

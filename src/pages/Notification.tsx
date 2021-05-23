import React from 'react';
import styled from '@emotion/styled';

import api from '../utils/api';

export default () => {
  const onSubmit = async (data: any) => {
    try {
      const token = localStorage.getItem('token');
      const accessToken = JSON.parse(token as string).access;

      const res = await api.post(
        '/parkinglot/mark_use',
        { idx: data },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (res.status === 200) {
        document.location.replace('/main');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onFail = () => document.location.replace('/main');

  return (
    <Container>
      <SubTitle>완료하기</SubTitle>
      <BannerWrap>
        <Banner src={require('../assets/notification.png')} />
      </BannerWrap>
      <QuestionWrap>
        <Title>주차 성공하셨나요?</Title>
        <Description>
          주차 공간이 제공되어 해당 문제가 해결되셨다면, 하단에 버튼을 눌러 주차
          완료를 해주세요!
        </Description>
      </QuestionWrap>
      <ButtonWrap>
        <CompleteBtn
          onClick={() => onSubmit(document.location.search.split('=')[1])}
        >
          주차 완료
        </CompleteBtn>
        <SpaceBetween>
          <SpaceSubTitle>주차하지 못 했어요.</SpaceSubTitle>
          <ClickTitle onClick={onFail}>주차 실패</ClickTitle>
        </SpaceBetween>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;

  text-align: center;
  padding: 7px 0 18px 0;
`;
const BannerWrap = styled.div`
  width: 100%;
`;
const Banner = styled.img``;

const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  text-align: center;
  margin: 24px 0;
`;
const Description = styled.p`
  width: 100%;
  max-width: 286px;
  font-size: 18px;
  letter-spacing: -0.67px;
  text-align: center;
  color: #8e8e8e;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 34px;
  padding: 0 24px;
`;
const CompleteBtn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px 0 #666666;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 32px;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: center;
`;
const SpaceSubTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #b4b4b4;
  margin-right: 16px;
`;
const ClickTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #afafaf;
  cursor: pointer;
  text-decoration: underline;
`;

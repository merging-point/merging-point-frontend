import styled from '@emotion/styled';
import React, { useState } from 'react';
import KakaoMap from '../components/KakaoMap';
import KakaoMapLoadPlaces from '../components/KakaoMapLoadPlaces';
import KakaoMapSearch from '../components/KakaoMapSearch';
import Logo from '../components/Logo';

export default () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [focusPlace, setFocusPlace] = useState<any>(null);

  const [placeCount, setPlaceCount] = useState<number>(0);

  return (
    <Container>
      <SidebarContainer>
        <Logo style={{ marginBottom: 28 }} />
        <LocationWrap>
          <AddressWrap>
            <Address>서울시 용산구 청파동</Address>
            <AvailableCount>
              <b>총 주차 가능 공간</b> {placeCount}개
            </AvailableCount>
          </AddressWrap>
          <GeolocationIcon src={require('../assets/geolocation-icn.svg')} />
        </LocationWrap>
        <SearchInputContainer>
          <SearchInputIcon src={require('../assets/search-icn.svg')} />
          <SearchInput
            placeholder="위치를 입력해주세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && setSearchKeyword(keyword)}
          />
        </SearchInputContainer>
        <Divider />
        <SectionContainer>
          <SectionTitleWrap>
            <SectionTitleText>가장 가까운 곳</SectionTitleText>
            <SectionSubTitleText>(GPS 기준)</SectionSubTitleText>
          </SectionTitleWrap>
          <Address>청파동3가 청파로 45번길</Address>
          <DistanceText>현재 위치에서 2분 안에 도착!</DistanceText>
          <Divider />

          <Address>청파동3가 청파로 45번길</Address>
          <DistanceText> 장애인 주차 공간 평균 대비 4% ↑</DistanceText>
          {JSON.stringify(focusPlace)}
        </SectionContainer>
      </SidebarContainer>
      <MapContainer>
        <KakaoMap lat={37.555078} lng={126.970702} height="100vh" level={10}>
          <KakaoMapSearch keyword={searchKeyword} />
          <KakaoMapLoadPlaces
            setFocusPlace={setFocusPlace}
            setPlaceCount={setPlaceCount}
          />
        </KakaoMap>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 382px;
  background-color: white;
  padding: 48px 50px;
  box-shadow: 4px 2px 4px 0 rgba(210, 210, 210, 0.5);
`;

const MapContainer = styled.div`
  flex: 1;
  background-color: white;
`;

const LocationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const GeolocationIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Address = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 8px;
`;

const AvailableCount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fd146a;
  & > b {
    font-weight: 500;
    color: #212121;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 2px #fd146a;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 20px 16px 20px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  &::placeholder {
    color: #afafaf;
  }
`;

const SearchInputIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 16px;
`;

const Divider = styled.span`
  width: 100%;
  height: 2px;
  margin: 16px 0 15px;
  background-color: #f2f2f2;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitleWrap = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitleText = styled.span`
  font-size: 21px;
  font-weight: bold;
  color: #212121;
`;

const SectionSubTitleText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #afafaf;
`;

const DistanceText = styled.span`
  font-size: 14px;
  color: #fd146a;
  font-weight: 500;
  letter-spacing: -0.6px;
`;

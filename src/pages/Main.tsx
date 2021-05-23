import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import Sheet from 'react-modal-sheet';

import KakaoMap from '../components/KakaoMap';
import KakaoMapLoadPlaces from '../components/KakaoMapLoadPlaces';
import KakaoMapSearch from '../components/KakaoMapSearch';
import Logo from '../components/Logo';

export default () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  const [keyword, setKeyword] = useState<string>('');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [isOpen, setOpen] = useState(false);

  const [focusPlace, setFocusPlace] = useState<any>(null);

  const [placeCount, setPlaceCount] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 760);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 760);
      });
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <>
          <Sheet
            isOpen={isOpen}
            snapPoints={[window.innerHeight / 1.1, window.innerHeight / 1.6]}
            initialSnap={1}
            onClose={() => setOpen(false)}
          >
            <Sheet.Container>
              <Sheet.Content>
                <SidebarContainer>
                  <LogoWrapper>
                    <Logo style={{ marginBottom: 28 }} />
                  </LogoWrapper>
                  <LocationWrap>
                    <AddressWrap>
                      <Address>{address}</Address>
                      <AvailableCount>
                        <b>총 주차 가능 공간</b> {placeCount}개
                      </AvailableCount>
                    </AddressWrap>
                    <GeolocationIcon
                      src={require('../assets/geolocation-icn.svg')}
                    />
                  </LocationWrap>
                  <SearchInputContainer>
                    <SearchInputIcon
                      src={require('../assets/search-icn.svg')}
                    />
                    <SearchInput
                      placeholder="위치를 입력해주세요."
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === 'Enter' && setSearchKeyword(keyword)
                      }
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
                    <DistanceText>
                      {' '}
                      장애인 주차 공간 평균 대비 4% ↑
                    </DistanceText>
                    {JSON.stringify(focusPlace)}
                  </SectionContainer>
                </SidebarContainer>
              </Sheet.Content>
            </Sheet.Container>
          </Sheet>
          <OpenModalBtn onClick={() => setOpen(true)}>
            <UpArrow src={require('../assets/up-arrow.svg')} />
          </OpenModalBtn>
        </>
      ) : (
        <SidebarContainer>
          <LogoWrapper>
            <Logo style={{ marginBottom: 28 }} />
          </LogoWrapper>
          <LocationWrap>
            <AddressWrap>
              <Address>{address}</Address>
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
      )}
      <MapContainer>
        <KakaoMap lat={37.555078} lng={126.970702} height="100vh" level={10}>
          <KakaoMapSearch keyword={searchKeyword} />
          <KakaoMapLoadPlaces
            setFocusPlace={setFocusPlace}
            setPlaceCount={setPlaceCount}
            setAddress={setAddress}
          />
        </KakaoMap>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 382px;
  background-color: white;
  box-shadow: 4px 2px 4px 0 rgba(210, 210, 210, 0.5);
  padding: 48px 50px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 -1px 4px 0 rgba(204, 204, 204, 0.5);
    padding: 22px 19px 0 19px;
  }
`;

const LogoWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const UpArrow = styled.img``;

const MapContainer = styled.div`
  flex: 1;
  background-color: white;
`;

const OpenModalBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #ffffff;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  border: 2px solid black;
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
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: bold;
  }
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
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
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

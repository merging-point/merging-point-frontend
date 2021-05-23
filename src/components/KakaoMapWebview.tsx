import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MapContext } from './KakaoMap';
// import { MapContext } from './KakaoMap';
import Marker from './KakaoMapMarker';

const { kakao } = window;

const gpsMarker = new kakao.maps.MarkerImage(
  'https://t1.daumcdn.net/localimg/localimages/07/2018/mw/m640/ico_marker.png',
  new kakao.maps.Size(30, 30),
  { offset: new kakao.maps.Point(15, 15) },
);

const KakaoMapWebview = ({ center, setCenter }: any) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  // const [initialized, setInitialized] = useState(false);
  const map: any = useContext(MapContext);

  const handleEvent = useCallback(
    (event: { data: string }) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'geolocation':
          if (
            data.data.lat !== 0 &&
            data.data.lng !== 0 &&
            data.data.lat !== location.lat &&
            data.data.lng !== location.lng
          ) {
            // if (!initialized) {
            //   map.setCenter(
            //     new kakao.maps.LatLng(data.data.lat, data.data.lng),
            //   );
            //   setInitialized(true);
            // }
            setLocation({ lat: data.data.lat, lng: data.data.lng });
          }
          break;
      }
    },
    [location],
  );

  useEffect(() => {
    if (center) {
      if (location.lat !== 0 && location.lng !== 0) {
        map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
        setCenter(false);
      } else {
        window.alert('위치 정보가 조회되지 않았습니다.');
      }
    }
    // eslint-disable-next-line
  }, [center]);

  useEffect(() => {
    document.addEventListener(
      'message',
      (event: any) => handleEvent(event),
      false,
    );
    window.addEventListener(
      'message',
      (event: any) => handleEvent(event),
      false,
    );
    return () => {
      document.removeEventListener(
        'message',
        (event: any) => handleEvent(event),
        false,
      );
      window.removeEventListener(
        'message',
        (event: any) => handleEvent(event),
        false,
      );
    };
  }, [handleEvent]);

  return <Marker lat={location.lat} lng={location.lng} image={gpsMarker} />;
};

export default KakaoMapWebview;

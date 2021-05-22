import React, { useCallback, useContext, useEffect, useState } from 'react';
import markers from '../constance/markers';
import api from '../utils/api';
import { MapContext } from './KakaoMap';
import KakaoMapMarker from './KakaoMapMarker';
// import Marker from '../Marker';
// import { marker } from '../SelectMarker';
// import webview from '../../utils/webview';
// import { unionBy } from 'lodash';

const { kakao } = window;

interface IBound {
  swlat: number;
  swlng: number;
  nelat: number;
  nelng: number;
}

const KakaoMapLoadPlaces = ({
  setFocusPlace,
  setPlaceCount,
}: {
  setFocusPlace: any;
  setPlaceCount: any;
}) => {
  const map: any = useContext(MapContext);
  const [bounds, setBounds] = useState<IBound>({
    swlat: 0,
    swlng: 0,
    nelat: 0,
    nelng: 0,
  });
  const [placeData, setPlaceData] = useState([]);

  const handleIdle = useCallback(() => {
    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();
    setBounds({
      swlat: swLatLng.getLat(),
      nelat: neLatLng.getLat(),
      swlng: swLatLng.getLng(),
      nelng: neLatLng.getLng(),
    });
  }, [map]);

  useEffect(() => {
    handleIdle();

    kakao.maps.event.addListener(map, 'idle', handleIdle);

    return () => kakao.maps.event.removeListener(map, 'idle', handleIdle);
  }, [handleIdle, map]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/parkinglot/get_closest', {
        params: {
          south_west_latitude: bounds.swlat,
          south_west_longtitude: bounds.swlng,
          north_east_latitude: bounds.nelat,
          north_east_longtitude: bounds.nelng,
        },
      });
      setPlaceCount(data.length);
      setPlaceData(data);
    })();
  }, [bounds]);

  //   useEffect(() => {
  //     if (data) {
  //       setPlaceData(state => unionBy([...state], data.loadPlaces, "id"));
  //     }
  //   }, [data]);

  return (
    <>
      {placeData.map((place: any) => {
        const disabledParkingCount =
          place.parking_compartments_cnt > 50
            ? Math.ceil(place.parking_compartments_cnt * 0.04)
            : 0;
        const markerImg =
          disabledParkingCount <= 99
            ? markers[disabledParkingCount - 1]
            : markers[98];
        if (disabledParkingCount === 0) return null;
        return (
          <KakaoMapMarker
            key={place.idx}
            lat={place.latitude}
            lng={place.longtitude}
            image={markerImg}
            onClick={() => setFocusPlace(place)}
          />
        );
      })}
    </>
  );
};

export default KakaoMapLoadPlaces;

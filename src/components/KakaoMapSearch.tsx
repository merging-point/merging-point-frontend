import { useContext, useEffect } from 'react';
import { MapContext } from './KakaoMap';

const { kakao } = window;

interface IProps {
  keyword: string;
}

const ps = new kakao.maps.services.Places();

const KakaoMapSearch = (props: IProps) => {
  const { keyword } = props;
  const map: any = useContext(MapContext);

  useEffect(() => {
    if(keyword) {
      ps.keywordSearch(keyword, (data: any, status: any, pagination: any) => {
        if (status === kakao.maps.services.Status.OK) {
          map.setCenter(new kakao.maps.LatLng(data[0].y, data[0].x));
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }
      });
    }
    // return () => {};
  }, [keyword, map]);

  return null;
};

export default KakaoMapSearch;

/* eslint-disable import/prefer-default-export */

const { kakao } = window;
console.log(kakao);
export default new Array(100)
  .fill(null)
  .map(
    (_, index) =>
      new kakao.maps.MarkerImage(
        require(`../assets/markers/${index + 1}.png`),
        new kakao.maps.Size(50, 50),
        { offset: new kakao.maps.Point(15, 15) },
      ),
  );

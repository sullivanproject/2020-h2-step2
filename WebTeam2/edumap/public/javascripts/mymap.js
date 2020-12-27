// 커스텀 마커 이미지
const imageSrc = '/images/location.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(54, 59), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커 개수 저장하는 변수
let marker_count = 0;

// 마커 리스트
let markerList = [];
// 인포윈도우 리스트
let infoWindow = [];
// 커스텀오버레이 리스트
let customOverlayList = [];

// 지도 위를 클릭하면 이름을 정해 마커로 표시하는 이벤트 리스너
kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    let latlng = mouseEvent.latLng;

    let input = prompt('해당 좌표에 등록할 이름을 입력해주세요.', '집');

    if(input==null){
        console.log(input);
        return;
    } else {
      console.log(input);
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let cmarkerPosition = new kakao.maps.LatLng(latlng.getLat(),latlng.getLng()); // 마커가 표시될 위치입니다

      const cmarkerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      // 마커를 생성합니다
      let cmarker = new kakao.maps.Marker({
        position: cmarkerPosition,
        image: cmarkerImage // 마커이미지 설정 
      });

      marker_count++;

      
      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      let cocontent = '<div class="educo">' +
          '  <a href="#" target="_blank">' +
          '    <span id="cmName' + marker_count + '" class="title">' + input + '</span>' +
          '  </a>' +
          '</div>';

      // 커스텀 오버레이가 표시될 위치입니다 
      let coposition = new kakao.maps.LatLng(latlng.getLat(),latlng.getLng());  

      // 커스텀 오버레이를 생성합니다
      let customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: coposition,
          content: cocontent,
          yAnchor: 1 
      });

      markerList.push(cmarker);
      customOverlayList.push(customOverlay);

      console.log(marker_count + '번째 마커의 ' + '(' + input + ')' + '위도 ' + latlng.getLat() + ' 경도 ' + latlng.getLng() + ' 입니다.');

      for(let co in customOverlayList){
        let latlng = customOverlayList[co].getPosition();
        console.log(`${co} : (${latlng.latitude}, ${latlng.longitude})`);
    }

      cmarker.setMap(map);

      return;
    }

});


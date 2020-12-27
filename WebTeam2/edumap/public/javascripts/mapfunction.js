// 좌표 이용해서 마커 정보 추가하는 함수
function addMarker(x,y){
    //마커 위치 저장할 const   
    let newMarkerPosition = new kakao.maps.LatLng(x,y);
        
    //저장한 위치를 마커로 설정
    let newMarker = new kakao.maps.Marker({
        position: newMarkerPosition
    });

    return newMarker;
}

function addinfoWindow(x, y){
    let iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(x,y); // 인포윈도우 표시 위치
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성하고 지도에 표시합니다
    let infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position : iwPosition, 
        content : iwContent,
        removable : iwRemoveable
    });
    
    return infowindow;
}

function addcustomex(x, y){
    // 커스텀 오버레이에 표시할 내용입니다     
    // HTML 문자열 또는 Dom Element 입니다 
    let content = '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    let position = new kakao.maps.LatLng(x, y);  

    // 커스텀 오버레이를 생성합니다
    let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content   
    });

    return customOverlay;
}

function addmycustom(x,y,name,address){
    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    let content = '<div class="myco">' + 
    '    <div class="info">' + 
    '        <div class="title">' + 
                 name + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="img">' +
    '                <img src="images/bgg.jpg" width="70" height="70">' +
    '           </div>' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">' +
                        address +
    '                </div>' + 
    '                <div><a href="#" target="_blank" class="link">홈페이지</a></div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    let position = new kakao.maps.LatLng(x, y);  

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    let overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: position,
        yAnchor: 1
    });

    return overlay;
}
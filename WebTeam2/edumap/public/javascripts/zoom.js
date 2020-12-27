function zoomIn(){
    let level = map.getLevel();
    map.setLevel(level-1);
    displayLevel();
    //alert('+클릭');
  }

function zoomOut(){
    let level = map.getLevel();
    map.setLevel(level+1);
    displayLevel();
    //alert('-클릭');
}

//레벨버튼클릭
const btn_plus = document.getElementById('btn_zoomin');
const btn_minus = document.getElementById('btn_zoomout');


function displayLevel(){
    console.log('현재 레벨은 ' + map.getLevel() + ' 입니다. ');
}
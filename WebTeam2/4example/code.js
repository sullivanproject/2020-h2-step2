// 함수 선언법 : function a() {}
// 조건문 : if ~ else if ~ else
// console.log() : 콘솔창 로그 입력 함수
function checkform(){
    let id  = document.getElementById('id').value;
    let pw = document.getElementById('pw').value;
    let mname = document.getElementById('name').value;
    let birth_yy = document.getElementById('yy').value;
    let birth_mm = document.getElementById('mm').value;
    let birth_dd = document.getElementById('dd').value;
    let number = document.getElementById('number').value;
    //let : 변수 선언법 const : 상수 선언법(추후 값 변경 불가)
    //document.getElementById('id') : html요소에서 id라는 아이디를 가진 태그를 지칭함

    if(id==''){
        alert("아이디를 입력하지 않았습니다.");
    }
    else if(pw==''){
        alert("비밀번호를 입력하지 않았습니다.");
    }
    else if(mname==''){
        alert("이름을 입력하지 않았습니다.");
    }
    else if(birth_yy=='' || birth_dd=='' || birth_mm==false){
        alert("생일을 입력하지 않았습니다.");
    }
    else if(number==''){
        alert("전화번호를 입력하지 않았습니다.");
    }
    else {
        console.log(id);
        console.log(pw);
        console.log(mname);
        console.log(birth_yy + '년' + birth_mm + '월' + birth_dd + '일');
        console.log(number);
    }
}

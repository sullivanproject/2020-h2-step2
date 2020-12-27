let today = new Date();

let year = today.getFullYear(); //년도
let month = today.getMonth(); //월
let date = today.getDate(); //일
let day = today.getDay(); //요일

let hours = today.getHours(); //
let minutes = today.getMinutes(); //분

//현재시각정보표시
const todays_date = document.getElementById('infoDate');
const now_time = document.getElementById('infoTime');

let str_todaysdate = year + '년 ' + month + '월 ' + date + '일';
let str_nowtime = hours + '시 ' + minutes + '분 ';

todays_date.innerText = str_todaysdate;
now_time.innerText = str_nowtime;     


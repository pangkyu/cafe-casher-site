// 현재시간을 알려주는 js파일 
const timeNow = document.getElementById("header__timeNow");
/*const mysql = require('mysql');
const categoryBtn = document.getElementsByClassName("takeout_menu");
*/

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()).padStart(2,"0");
    const day = String(date.getUTCDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    timeNow.innerText = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
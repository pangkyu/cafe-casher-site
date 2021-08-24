// staff.html 에 사용되는 js

const database = require('./database');

const staffBtn = document.getElementsByClassName('staff__main--footer');
const addBtn = staffBtn.getElementsByClassName('staff__main--footer-add');
const removeBtn = staffBtn.getElementsByClassName('staff__main--footer-remove');
const editBtn = staffBtn.getElementsByClassName('staff__main--footer-edit');


//추가 삭제 수정 버튼  content영역 div 적용  
//추가 누르면 content에 빈칸 + submit 형태가 생성
//db확인해서 데이터값이 있는 크기만큼 for문돌려서 div에 데이터 출력

function handleStaffAdd(event){
    event.preventDefault();
    const list = document.getElementsByClassName("staff__main--content");
    //입력값 db에 넣기
    // 추가 클릭하면 hidden 표시 사라져서 보이게 
    const sql = 'insert into staff (staffName, staffStatus, staffSex, staffPhoneNum) values (?,?,?,?)';
    const params = ['..', '..', '..', '..'];
    database.query(sql, params, function(err,rows,fields){
        if(err){
            console.log(err);
        }else{
            console.log(rows.insertId);
        }
    })
    
  //  list.innerHTML += `<div>직원명</div><div>근무자명</div><div>성별</div><div>연락처</div>`;
}



addBtn.addEventListener("onClick", handleStaffAdd);
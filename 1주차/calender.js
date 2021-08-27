let curDate = new Date();
let today = new Date();
buildCalender();
function buildCalender() {
  let prevLast = new Date(curDate.getFullYear(), curDate.getMonth(), 0); // 저번달 말일을 저장
  console.log(prevLast);
  let curFirst = new Date(curDate.getFullYear(), curDate.getMonth(), 1); // 이번달 1일을 저장
  console.log(curFirst);
  let curLast = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0); // 이번달 말일을 저장
  console.log(curLast);
  document.querySelector(".year").innerHTML = curDate.getFullYear() + "년"; // year클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 현재연도로 바꾼다.
  document.querySelector(".month").innerHTML = curDate.getMonth() + 1 + "월"; // month클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 이번달로 바꾼다.

  let dates = [];
  if (curFirst.getDay() != 0) {
    // 이번달 1일이 일요일이 아니면
    for (let i = 0; i < curFirst.getDay(); i++) {
      dates.unshift(prevLast.getDate() - i); // 지난달의 말일에서 i를 빼면서 달력을 채운다.
    }
  }
  for (let i = 1; i <= curLast.getDate(); i++) {
    // 이번 달의 말일의 요일을 센다
    dates.push(i);
  }
  for (let i = 1; i <= 6 - curLast.getDay(); i++) { // 달력에 35일에 맞게 다음 달의 날짜를 가져온다. 
    dates.push(i);
  }
}

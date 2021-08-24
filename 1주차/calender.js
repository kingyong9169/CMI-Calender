let curDate = new Date();
buildCalender();
function buildCalender() {
  let prevLast = new Date(curDate.getFullYear(), curDate.getMonth(), 0); // 저번달 말일을 저장
  let curFirst = new Date(curDate.getFullYear(), curDate.getMonth(), 1); // 이번달 1일을 저장
  let curLast = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0); // 이번달 말일을 저장
  document.querySelector(".year").innerHTML = curDate.getFullYear(); // year클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 현재연도로 바꾼다.
  document.querySelector(".month").innerHTML = curDate.getMonth() + 1; // month클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 이번달로 바꾼다.
}

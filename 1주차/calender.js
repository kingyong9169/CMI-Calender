const DISPLAYNUM = 42;
let curDate = new Date();
let today = new Date();
buildCalender();
function buildCalender() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let prevLast = new Date(curDate.getFullYear(), curDate.getMonth(), 0); // 저번달 말일을 저장
  let curFirst = new Date(curDate.getFullYear(), curDate.getMonth(), 1); // 이번달 1일을 저장
  let curLast = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0); // 이번달 말일을 저장
  document.querySelector(".year").innerHTML = curDate.getFullYear() + "."; // year클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 현재연도로 바꾼다.
  document.querySelector(".month").innerHTML =
    monthNames[curDate.getMonth()] + "."; // month클래스를 갖고 있는 첫번째 html요소의 컨텐츠를 선택하여 이번달로 바꾼다.

  let dates = [];
  let prevCount = 0;
  let nextCount = 0;
  if (curFirst.getDay() != 0) {
    // 이번달 1일이 일요일이 아니면
    for (let i = 0; i < curFirst.getDay(); i++) {
      dates.unshift(prevLast.getDate() - i); // 지난달의 말일에서 i를 빼면서 달력을 채운다.
      prevCount += 1;
    }
  }
  for (let i = 1; i <= curLast.getDate(); i++) {
    // 이번 달의 말일의 요일을 센다
    dates.push(i);
  }
  for (let i = 1; i <= DISPLAYNUM - prevCount - curLast.getDate(); i++) {
    // 달력에 42일에 맞게 다음 달의 날짜를 가져온다.
    dates.push(i);
    nextCount += 1;
  }

  let htmlDates = "";

  for (let i = 0; i < prevCount; i++) {
    htmlDates += `<li class="date prevMonth">${dates[i]}</li>`;
  }
  for (let i = prevCount; i < DISPLAYNUM - nextCount; i++) {
    if (
      today.getDate() == dates[i] &&
      today.getMonth() == curDate.getMonth() &&
      today.getFullYear() == curDate.getFullYear()
    ) {
      htmlDates += `<li class="date today">${dates[i]}</li>`;
    } else {
      htmlDates += `<li class="date">${dates[i]}</li>`;
    }
  }
  for (let i = DISPLAYNUM - nextCount; i < DISPLAYNUM; i++) {
    htmlDates += `<li class="date nextMonth">${dates[i]}</li>`;
  }
  document.querySelector(".dates").innerHTML = htmlDates;
}

function prev() {
  curDate.setMonth(curDate.getMonth() - 1);
  buildCalender();
}
function next() {
  curDate.setMonth(curDate.getMonth() + 1);
  buildCalender();
}

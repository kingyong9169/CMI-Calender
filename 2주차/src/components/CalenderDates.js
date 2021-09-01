import CurrentMonth from "./CurrentMonth.js";
import { htmlDom } from "../utils/htmlDom.js";

export default class CalenderDates {
  $target; // target
  $state; // 변화 감지
  constructor({ $target, $parent, $state }) {
    // target에 해당하는 것에 대한 생성자 함수
    this.$target = $target ? $target : htmlDom(`<ul class="dates"></ul>`);
    if (!$target) $parent.appendChild(this.$target);
    this.$state = $state;
    console.log($state);
    this.setup();
    this.render();
  }
  setup() {
    // 오버라이딩
  }

  template() {
    // 새로 렌더링 될 html 부분
    return `
    `;
  }

  setEvent() {
    // 오버라이딩
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState }; // 기존 상태와 새로 생기는 상태를 하나의 상태로하여 다시 렌더링
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();

    const { DISPLAYNUM, curDate, curFirst, curLast, prevLast, today } =
      this.$state;

    let dates = [];
    let prevCount = 0;
    let nextCount = 0;
    let htmlDates = "";
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
    this.$target.innerHTML = htmlDates;
    // state변경 혹은 이벤트 발생 시 template에 있는 내용으로 다시 렌더링

    this.setEvent();
  }
}

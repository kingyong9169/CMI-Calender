import { htmlDom } from "../utils/htmlDom.js";
import { dateToMonth } from "../utils/dateToMonth.js";

export default class CalenderHeader {
  $target; // target
  $state; // 변화 감지
  constructor({ $target, $parent, $state }) {
    // target에 해당하는 것에 대한 생성자 함수
    this.$target = $target
      ? $target
      : htmlDom(`<div class="currentMonth"></div>`);
    console.log(this.$target);
    if (!$target) $parent.appendChild(this.$target);
    this.$state = $state;
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
    // state변경 혹은 이벤트 발생 시 template에 있는 내용으로 다시 렌더링
    this.$target.innerHTML = this.template();
    this.$target.textContent = dateToMonth(
      this.$state.monthNames,
      this.$state.curDate
    );
    this.setEvent();
  }
}

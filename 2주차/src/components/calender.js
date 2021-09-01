import CalenderHeader from "./CalenderHeader.js";
import CalenderMain from "./CalenderMain.js";
import { htmlDom } from "../utils/htmlDom.js";
export default class Calender {
  $target; // target
  $state = {}; // 변화 감지
  constructor({ $target, $parent, $state }) {
    // target에 해당하는 것에 대한 생성자 함수
    this.$target = $target ? $target : htmlDom(`<div class="calender"></div>`);
    if (!$target) $parent.appendChild(this.$target);
    this.$state = $state;
    this.setup();
    this.render();
  }
  setup() {
    // 오버라이딩
    const newState = {
      monthNames: [
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
      ],
      prevLast: new Date(
        this.$state.curDate.getFullYear(),
        this.$state.curDate.getMonth(),
        0
      ), // 저번달 말일을 저장
      curFirst: new Date(
        this.$state.curDate.getFullYear(),
        this.$state.curDate.getMonth(),
        1
      ), // 이번달 1일을 저장
      curLast: new Date(
        this.$state.curDate.getFullYear(),
        this.$state.curDate.getMonth() + 1,
        0
      ), // 이번달 말일을 저장 };
    };
    this.$state = { ...this.$state, ...newState };
  }

  template() {
    // 새로 렌더링 될 html 부분
    return "";
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

    new CalenderHeader({ $parent: this.$target, $state: this.$state });
    new CalenderMain({ $parent: this.$target, $state: this.$state });
    this.setEvent();
  }
}

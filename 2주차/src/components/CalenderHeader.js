import CurrentMonth from "./CurrentMonth.js";
import { htmlDom } from "../utils/htmlDom.js";

export default class CalenderHeader {
  $target; // target
  $state; // 변화 감지
  constructor({ $target, $parent, $state }) {
    // target에 해당하는 것에 대한 생성자 함수
    this.$target = $target
      ? $target
      : htmlDom(`<header class="header"></header>`);
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
        <button class="prev" onclick="prev()"><i class="far fa-arrow-alt-circle-left"></i></button>
        <div class="currentMonth"></div>
        <button class="next" onclick="next()"><i class="far fa-arrow-alt-circle-right"></i></button>
    `;
  }

  setEvent() {
    // 상태를 사용하는 컴포넌트에게 변경되었다는 것을 알려야 함.
    // 나중에 스토어로 리팩토링
    // 오버라이딩
    const { curDate } = this.$state;
    const $prev = this.$target.querySelector(".prev");
    const $next = this.$target.querySelector(".next");

    $prev.addEventListener("click", () => {
      curDate.setMonth(curDate.getMonth() - 1);
      this.setState();
    });

    $next.addEventListener("click", () => {
      curDate.setMonth(curDate.getMonth() + 1);
      this.setState();
    });
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState }; // 기존 상태와 새로 생기는 상태를 하나의 상태로하여 다시 렌더링
    this.render();
  }

  render() {
    // state변경 혹은 이벤트 발생 시 template에 있는 내용으로 다시 렌더링
    this.$target.innerHTML = this.template();
    const $header = this.$target.querySelector(".currentMonth");
    new CurrentMonth({ $target: $header, $state: this.$state });
    this.setEvent();
  }
}

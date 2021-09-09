export default class Component {
  $target; // target
  $props;
  $state; // 변화 감지
  constructor($target, $props) {
    // target에 해당하는 것에 대한 생성자 함수
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {
    // 오버라이딩
    this.state = observable(this.initState()); // state를 관찰한다.
    observe(() => {
      // state가 변경될 경우, 함수가 실행된다.
      this.render();
      this.mounted();
    });
  }
  mounted() {
    // render 이후 추가 기능
  }
  initState() {
    // 초기 상태
  }
  template() {
    // 새로 렌더링 될 html 부분
    return "";
  }
  render() {
    // state변경 혹은 이벤트 발생 시 template에 있는 내용으로 다시 렌더링
    this.$target.innerHTML = this.template();
  }
  setEvent() {
    // 오버라이딩
  }

  addEvent(eventType, selector, callback) {
    // 이벤트타입, 선택자, 콜백
    const children = [...this.$target.querySelectorAll(selector)];
    // target의 선택자에 해당하는 것을 모두 선택해서 children에 넣음
    const isTarget = (
      target // 타겟인지 판단
    ) => children.includes(target) || target.closest(selector);
    // children이 target을 포함하거나
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐 closest를 이용하여 처리한다.
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false; // event.target이 타겟이 아니면 false리턴
      callback(event); // 맞으면 이벤트를 파라미터로 콜백 실행
    });
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState }; // 기존 상태와 새로 생기는 상태를 하나의 상태로하여 다시 렌더링
    this.render();
  }
}

import Calender from "./components/calender.js";

export default class App {
  $state;
  constructor() {
    this.$state = { DISPLAYNUM: 42, curDate: new Date(), tody: new Date() };
    const $app = document.querySelector("#app");
    new Calender({ $parent: $app, $state: this.$state });
  }
}

new App();

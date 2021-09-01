import Calender from "./components/calender.js";
import AppHeader from "./AppHeader.js";

export default class App {
  $state;
  constructor() {
    this.$state = { DISPLAYNUM: 42, curDate: new Date(), today: new Date() };
    const $app = document.querySelector("#app");
    new AppHeader({ $parent: $app });
    new Calender({ $parent: $app, $state: this.$state });
  }
}

new App();

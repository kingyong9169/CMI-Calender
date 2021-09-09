import Calender from "./components/calender.js";
import AppHeader from "./AppHeader.js";

export default class App {
  constructor() {
    const $app = document.querySelector("#app");
    new AppHeader({ $parent: $app });
    new Calender({ $parent: $app });
  }
}

new App();

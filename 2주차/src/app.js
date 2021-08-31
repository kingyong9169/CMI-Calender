import Calender from "./components/calender.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Calender({ $props: $app });
  }
}

new App();

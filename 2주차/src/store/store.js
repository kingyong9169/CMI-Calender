import { createStore } from "../core/Store.js";

// 초기 state의 값을 정의해준다.
const initState = {
  DISPLAYNUM: 42,
  curDate: new Date(),
  today: new Date(),
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
};

const finalState = {
  prevLast: new Date(
    initState.curDate.getFullYear(),
    initState.curDate.getMonth(),
    0
  ), // 저번달 말일을 저장
  curFirst: new Date(
    initState.curDate.getFullYear(),
    initState.curDate.getMonth(),
    1
  ), // 이번달 1일을 저장
  curLast: new Date(
    initState.curDate.getFullYear(),
    initState.curDate.getMonth() + 1,
    0
  ), // 이번달 말일을 저장 };
};

// dispatch에서 사용될 type들을 정의해준다.
export const PREV = "PREV";
export const NEXT = "NEXT";

// reducer를 정의하여 store에 넘겨준다.
export const store = createStore(
  (state = { ...initState, ...finalState }, action = {}) => {
    // console.log(state.curDate.setMonth(action.payload));
    switch (action.type) {
      case "PREV":
        console.log(state.curDate.setMonth(action.payload));
        return {
          ...state,
          curDate: state.curDate.setMonth(action.payload),
        };
      case "NEXT":
        console.log(state.curDate);
        console.log(state.curDate.setMonth(action.payload));
        return {
          ...state,
          curDate: state.curDate.setMonth(action.payload),
        };
      default:
        return state;
    }
  }
);

// reducer에서 사용될 action을 정의해준다.
export const prev = (payload) => ({ type: PREV, payload });
export const next = (payload) => ({ type: NEXT, payload });

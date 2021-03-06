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

const changeFinal = (state) => {
  state.prevLast = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth(),
    0
  );
  state.curFirst = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth(),
    1
  );
  state.curLast = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth() + 1,
    0
  );
};

// reducer에서 사용될 action을 정의해준다.
export const PREV = "PREV";
export const NEXT = "NEXT";

// reducer
const reducer = (state = { ...initState, ...finalState }, action = {}) => {
  switch (action.type) {
    case "PREV":
      //   let tmp = new Date(initState.curDate);
      //   tmp.setMonth(action.payload);
      //   state.curDate = tmp;
      state.curDate = new Date(initState.curDate.setMonth(action.payload));
      changeFinal(state);
      return {
        ...state,
        curDate: state.curDate,
      };
    case "NEXT":
      //   let tp = new Date(initState.curDate);
      //   tp.setMonth(action.payload);
      //   state.curDate = tp;
      state.curDate = new Date(initState.curDate.setMonth(action.payload));
      changeFinal(state);
      return {
        ...state,
        curDate: state.curDate,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

export const prev = (payload) => ({ type: PREV, payload });
export const next = (payload) => ({ type: NEXT, payload });

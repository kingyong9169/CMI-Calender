import { PREV, NEXT } from "./action";

const Calender = {
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

const dates = {
  prevLast: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth(),
    0
  ), // 저번달 말일을 저장
  curFirst: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth(),
    1
  ), // 이번달 1일을 저장
  curLast: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth() + 1,
    0
  ), // 이번달 말일을 저장}
};

const changeState = (state) => {
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

const calender = { ...Calender, ...dates };

export function reducer(state = calender, action) {
  switch (action.type) {
    case PREV:
      state.curDate = new Date(state.curDate.setMonth(action.payload));
      changeState(state);
      return {
        ...state,
      };

    case NEXT:
      state.curDate = new Date(state.curDate.setMonth(action.payload));
      changeState(state);
      return {
        ...state,
      };

    default:
      return state;
  }
}

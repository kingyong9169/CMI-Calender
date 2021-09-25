import { PREV, NEXT, HeaderAction } from './action';

export interface initialState {
  DISPLAYNUM: number;
  curDate: Date;
  today: Date;
  monthNames: Array<string>;
}

export interface initialDates {
  prevLast: Date;
  curFirst: Date;
  curLast: Date;
}

export interface finalState extends initialState, initialDates {}

const Calender: initialState = {
  DISPLAYNUM: 42,
  curDate: new Date(),
  today: new Date(),
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const dates: initialDates = {
  prevLast: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth(),
    0,
  ), // 저번달 말일을 저장
  curFirst: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth(),
    1,
  ), // 이번달 1일을 저장
  curLast: new Date(
    Calender.curDate.getFullYear(),
    Calender.curDate.getMonth() + 1,
    0,
  ), // 이번달 말일을 저장
};

const changeState = (state: finalState) => {
  state.prevLast = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth(),
    0,
  );
  state.curFirst = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth(),
    1,
  );
  state.curLast = new Date(
    state.curDate.getFullYear(),
    state.curDate.getMonth() + 1,
    0,
  );
};

const calender: finalState = { ...Calender, ...dates };

export function reducer(state = calender, action: HeaderAction) {
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

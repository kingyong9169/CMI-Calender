import React, { useState, useEffect, createContext } from "react";
import StyledCalender from "./style";
import CalenderHeader from "../CalenderHeader";
import CalenderMain from "../CalenderMain";

export const CalenderContext = createContext();
export const SetCalenderContext = createContext(() => {});

export default function Calender() {
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
  const initialState = {
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
    ), // 이번달 말일을 저장
  };
  const [calender, setCalender] = useState({ ...Calender, ...initialState });

  return (
    <StyledCalender>
      <SetCalenderContext.Provider value={setCalender}>
        <CalenderContext.Provider value={calender}>
          <CalenderHeader />
          <CalenderMain />
        </CalenderContext.Provider>
      </SetCalenderContext.Provider>
    </StyledCalender>
  );
}

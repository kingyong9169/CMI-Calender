import React, { useState, useEffect, useContext } from "react";
import { CalenderContext, SetCalenderContext } from "../Calender";
import StyledCalenderHeader from "./style";

export default function CalenderHeader() {
  const Calender = useContext(CalenderContext);
  const setCalender = useContext(SetCalenderContext);
  const { curDate, monthNames } = Calender;

  const prev = () => {
    setCalender({
      ...Calender,
      curDate: new Date(curDate.setMonth(curDate.getMonth() - 1)),
    });
  };
  const next = () => {
    setCalender({
      ...Calender,
      curDate: new Date(curDate.setMonth(curDate.getMonth() + 1)),
    });
  };

  useEffect(() => {
    setCalender({
      ...Calender,
      prevLast: new Date(curDate.getFullYear(), curDate.getMonth(), 0),
      curFirst: new Date(curDate.getFullYear(), curDate.getMonth(), 1),
      curLast: new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0),
    });
  }, [curDate]);

  return (
    <StyledCalenderHeader>
      <button className="prev" onClick={prev}>
        <i className="far fa-arrow-alt-circle-left"></i>
      </button>
      <div className="currentMonth">
        {monthNames[curDate.getMonth()] + ". " + curDate.getFullYear() + ". "}
      </div>
      <button className="next" onClick={next}>
        <i className="far fa-arrow-alt-circle-right"></i>
      </button>
    </StyledCalenderHeader>
  );
}

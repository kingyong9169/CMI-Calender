import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledCalenderHeader from "./style";
import { prev, next } from "../../store/action";

export default function CalenderHeader() {
  const calender = useSelector((state) => state);
  const dispatch = useDispatch();
  const { monthNames, curDate } = calender;

  const prevMonth = () => {
    dispatch(prev(curDate.getMonth() - 1));
  };
  const nextMonth = () => {
    dispatch(next(curDate.getMonth() + 1));
  };

  return (
    <StyledCalenderHeader>
      <button className="prev" onClick={prevMonth}>
        <i className="far fa-arrow-alt-circle-left"></i>
      </button>
      <div className="currentMonth">
        {monthNames[curDate.getMonth()] + ". " + curDate.getFullYear() + ". "}
      </div>
      <button className="next" onClick={nextMonth}>
        <i className="far fa-arrow-alt-circle-right"></i>
      </button>
    </StyledCalenderHeader>
  );
}

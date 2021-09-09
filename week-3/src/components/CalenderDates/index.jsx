import React, { useState, useEffect, useContext } from "react";
import { CalenderContext } from "../Calender";
import StyledCalenderDates from "./style";
import PrevMonth from "./prevMonth.js";
import Dates from "./dates.js";
import NextMonth from "./nextMonth.js";

export default function CalenderDates() {
  const Calender = useContext(CalenderContext);

  const { DISPLAYNUM, curDate, curFirst, curLast, prevLast, today } = Calender;

  const prev = [];
  const dates = [];
  const next = [];

  if (curFirst.getDay() !== 0) {
    // 이번달 1일이 일요일이 아니면
    for (let i = 0; i < curFirst.getDay(); i++) {
      prev.unshift(prevLast.getDate() - i); // 지난달의 말일에서 i를 빼면서 달력을 채운다.
    }
  }
  for (let i = 1; i <= curLast.getDate(); i++) {
    // 이번 달의 말일의 요일을 센다
    dates.push(i);
  }
  for (let i = 1; i <= DISPLAYNUM - prev.length - curLast.getDate(); i++) {
    // 달력에 42일에 맞게 다음 달의 날짜를 가져온다.
    next.push(i);
  }

  return (
    <StyledCalenderDates>
      {prev.map((prev, index) => (
        <PrevMonth key={index} prev={prev}></PrevMonth>
      ))}
      {dates.map((dates, index) => {
        if (
          today.getDate() === dates &&
          today.getMonth() === curDate.getMonth() &&
          today.getFullYear() === curDate.getFullYear()
        )
          return <Dates key={index} date={dates} today={true} />;
        else {
          return <Dates key={index} date={dates} today={false} />;
        }
      })}
      {next.map((next, index) => (
        <NextMonth key={index} next={next}></NextMonth>
      ))}
    </StyledCalenderDates>
  );
}

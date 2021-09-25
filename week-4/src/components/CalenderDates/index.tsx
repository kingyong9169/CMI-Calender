import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import StyledCalenderDates from './style';
import PrevMonth from './prevMonth';
import Dates from './dates';
import NextMonth from './nextMonth';
import { finalState } from '../../store/reducer';

const CalenderDates: React.FC = (): ReactElement => {
  const calender = useSelector((state: finalState) => state);
  const {
    DISPLAYNUM,
    curDate,
    curFirst,
    curLast,
    prevLast,
    today,
  }: finalState = calender;

  const prev: Array<number> = [];
  const dates: Array<number> = [];
  const next: Array<number> = [];

  let toDay = false;
  let sat = false;
  let sun = false;
  if (curFirst.getDay() !== 0) {
    // 이번달 1일이 일요일이 아니면
    for (let i = 0; i < curFirst.getDay(); i += 1) {
      prev.unshift(prevLast.getDate() - i); // 지난달의 말일에서 i를 빼면서 달력을 채운다.
    }
  }
  for (let i = 1; i <= curLast.getDate(); i += 1) {
    // 이번 달의 말일의 요일을 센다
    dates.push(i);
  }
  for (let i = 1; i <= DISPLAYNUM - prev.length - curLast.getDate(); i += 1) {
    // 달력에 42일에 맞게 다음 달의 날짜를 가져온다.
    next.push(i);
  }

  return (
    <StyledCalenderDates>
      {prev.map((prev) => (
        <PrevMonth key={prev} prev={prev} />
      ))}
      {dates.map((dates, index) => {
        toDay = false;
        sun = false;
        sat = false;
        if (
          today.getDate() === dates &&
          today.getMonth() === curDate.getMonth() &&
          today.getFullYear() === curDate.getFullYear()
        ) {
          toDay = true;
        } else if ((prev.length + index + 1) % 7 === 0) {
          // 일요일
          sat = true;
        } else if ((prev.length + index + 1) % 7 === 1) {
          // 토요일
          sun = true;
        }
        return (
          <Dates key={dates} date={dates} today={toDay} sat={sat} sun={sun} />
        );
      })}
      {next.map((next) => (
        <NextMonth key={next} next={next} />
      ))}
    </StyledCalenderDates>
  );
};

export default CalenderDates;

import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledCalenderHeader from './style';
import { prev, next } from '../../store/action';
import { finalState } from '../../store/reducer';

export default function CalenderHeader(): ReactElement {
  const calender = useSelector((state: finalState) => state);
  const dispatch = useDispatch();
  const { monthNames, curDate }: finalState = calender;

  const prevMonth = () => {
    dispatch(prev(curDate.getMonth() - 1));
  };
  const nextMonth = () => {
    dispatch(next(curDate.getMonth() + 1));
  };

  return (
    <StyledCalenderHeader>
      <button type="button" className="prev" onClick={prevMonth}>
        <i className="far fa-arrow-alt-circle-left" />
      </button>
      <div className="currentMonth">
        {`${monthNames[curDate.getMonth()]}. ${curDate.getFullYear()}. `}
      </div>
      <button type="button" className="next" onClick={nextMonth}>
        <i className="far fa-arrow-alt-circle-right" />
      </button>
    </StyledCalenderHeader>
  );
}

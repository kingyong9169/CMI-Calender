import React, { useState, useEffect, ReactElement } from 'react';
import CalenderDates from '../CalenderDates';
import StyledCalenderMain from './style';

export default function CalenderMain(): ReactElement {
  const day: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <StyledCalenderMain>
      <ul className="days">
        {day.map((day) => (
          <li key={day} className="day">
            {day}
          </li>
        ))}
      </ul>
      <CalenderDates />
    </StyledCalenderMain>
  );
}

import React, { useState } from 'react';
import StyledCalender from './style';
import CalenderHeader from '../CalenderHeader';
import CalenderMain from '../CalenderMain';

export default function Calender() {
  return (
    <StyledCalender>
      <CalenderHeader />
      <CalenderMain />
    </StyledCalender>
  );
}

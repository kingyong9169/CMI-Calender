import React, { useState } from 'react';
import StyledCalender from './style';
import CalenderHeader from '../CalenderHeader';
import CalenderMain from '../CalenderMain';

const Calender: React.FC = () => {
  return (
    <StyledCalender>
      <CalenderHeader />
      <CalenderMain />
    </StyledCalender>
  );
};

export default Calender;

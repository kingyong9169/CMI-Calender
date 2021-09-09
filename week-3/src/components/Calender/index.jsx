import React, { useState, useEffect } from "react";
import StyledCalender from "./style";
import CalenderHeader from "../CalenderHeader";
import CalenderMain from "../CalenderMain";

export default function Calender() {
  return (
    <StyledCalender>
      <div class="calender">
        <CalenderHeader />
        <CalenderMain />
      </div>
    </StyledCalender>
  );
}

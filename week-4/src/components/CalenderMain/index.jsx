import React, { useState, useEffect } from "react";
import CalenderDates from "../CalenderDates";
import StyledCalenderMain from "./style";

export default function CalenderMain() {
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <StyledCalenderMain>
      <ul className="days">
        {day.map((day, index) => (
          <li key={day} className="day">
            {day}
          </li>
        ))}
      </ul>
      <CalenderDates />
    </StyledCalenderMain>
  );
}

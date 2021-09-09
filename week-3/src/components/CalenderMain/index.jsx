import React, { useState, useEffect } from "react";
import CalenderDates from "../CalenderDates";
import StyledCalenderMain from "./style";

export default function CalenderMain() {
  return (
    <StyledCalenderMain>
      <main className="main">
        <ul className="days">
          <li className="day">Sun</li>
          <li className="day">Mon</li>
          <li className="day">Tue</li>
          <li className="day">Wed</li>
          <li className="day">Thu</li>
          <li className="day">Fri</li>
          <li className="day">Sat</li>
        </ul>
        <ul className="dates">
          <CalenderDates />
        </ul>
      </main>
    </StyledCalenderMain>
  );
}

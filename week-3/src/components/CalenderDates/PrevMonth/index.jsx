import React, { useState, useEffect } from "react";
import StyledPrevMonth from "./style";

export default function PrevMonth({ prev }) {
  return (
    <StyledPrevMonth>
      <li className="date prevMonth">{prev}</li>
    </StyledPrevMonth>
  );
}

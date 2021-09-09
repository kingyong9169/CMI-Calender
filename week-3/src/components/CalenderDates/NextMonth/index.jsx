import React, { useState, useEffect } from "react";
import StyledNextMonth from "./style";

export default function PrevMonth({ next }) {
  return (
    <StyledNextMonth>
      <li class="date nextMonth">{next}</li>
    </StyledNextMonth>
  );
}

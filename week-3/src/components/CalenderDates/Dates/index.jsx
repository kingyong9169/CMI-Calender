import React, { useState, useEffect } from "react";
import StyledDates from "./style";

export default function Dates(props) {
  const { date, today } = props;
  return (
    <StyledDates>
      <li className={`date ${today === true ? "today" : ""}`}>{date}</li>
    </StyledDates>
  );
}

import React, { useState, useEffect } from "react";
import StyledCalenderHeader from "./style";

export default function CalenderHeader() {
  const prev = () => {};
  const next = () => {};
  return (
    <StyledCalenderHeader>
      <header className="header">
        <button className="prev" onClick={prev}>
          <i className="far fa-arrow-alt-circle-left"></i>
        </button>
        <div className="currentMonth"></div>
        <button className="next" onClick={next}>
          <i className="far fa-arrow-alt-circle-right"></i>
        </button>
      </header>
    </StyledCalenderHeader>
  );
}

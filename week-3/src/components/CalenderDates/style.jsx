import styled from "styled-components";
import { bg, line, sat, sun, today } from "../../styles/color.js";

const CalenderDates = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .date {
    padding: 1rem 0;
    width: calc(100% / 7);
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid ${line};
    border-bottom: 1px solid ${line};
  }
  .sat {
    color: ${sat} !important;
  }
  .sun {
    color: ${sun} !important;
  }
  .today {
    background-origin: border-box;
    background-color: ${today};
  }
  .prevMonth {
    color: ${line} !important;
  }
  .nextMonth {
    color: ${line} !important;
  }
`;

export default CalenderDates;

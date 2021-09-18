import styled from "styled-components";
import { bg, line, sat, sun, today } from "../../styles/color.js";

const CalenderHeader = styled.header`
  justify-content: center;
  margin: auto;
  display: flex;
  .prev,
  .next {
    color: ${bg};
    padding: auto;
    font-size: 2rem;
    border: none;
    outline: none;
  }
  .currentMonth {
    color: ${bg};
    text-align: center;
    width: 10rem;
    margin: auto 2rem;
  }
`;

export default CalenderHeader;

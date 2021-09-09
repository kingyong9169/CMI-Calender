import styled from "styled-components";

const CalenderHeader = styled.header`
  justify-content: center;
  margin: auto;
  display: flex;
  .prev,
  .next {
    color: var(--bg);
    padding: auto;
    font-size: 2rem;
    border: none;
    outline: none;
    background-color: transparent;
  }
  .currentMonth {
    color: var(--bg);
    text-align: center;
    width: 10rem;
    margin: auto 2rem;
  }
`;

export default CalenderHeader;

import styled from "styled-components";

const CalenderMain = styled.main`
  .main {
    background-color: var(--bg);
    width: 40rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    .days {
      padding: auto;
      height: 3.5rem;
      border-bottom: 2px solid var(--line);
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .day {
        padding: 1rem;
        margin: 0;
        width: calc(100% / 7);
        display: inline;
        box-sizing: border-box;
        border-right: 1px solid var(--line);
        border-top: 1px solid var(--line);
      }
    }
    .dates {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default CalenderMain;

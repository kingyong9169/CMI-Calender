import styled from "styled-components";

const CalenderDates = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .date {
      padding: 1rem 0;
      width: calc(100% / 7);
      text-align: center;
      box-sizing: border-box;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .date:nth-child(7n)
      color: var(--sat);
    }
    .date:nth-child(7n + 1)
      color: var(--sun);
      border-left: 1px solid var(--line);
    }
    .today {
        background-origin: border-box;
        background-color: var(--today);
    }
    .prevMonth {
        color: var(--line) !important;
    }
    .nextMonth {
        color: var(--line) !important;
    }
`;

export default CalenderDates;

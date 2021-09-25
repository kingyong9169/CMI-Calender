import styled from 'styled-components';
import { CSSColors } from '../../styles/color';

const CalenderDates = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .date {
    padding: 1rem 0;
    width: calc(100% / 7);
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid ${CSSColors.line};
    border-bottom: 1px solid ${CSSColors.line};
  }
  .sat {
    color: ${CSSColors.sat} !important;
  }
  .sun {
    color: ${CSSColors.sun} !important;
  }
  .today {
    background-origin: border-box;
    background-color: ${CSSColors.today};
  }
  .prevMonth {
    color: ${CSSColors.line} !important;
  }
  .nextMonth {
    color: ${CSSColors.line} !important;
  }
`;

export default CalenderDates;

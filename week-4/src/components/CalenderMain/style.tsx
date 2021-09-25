import styled from 'styled-components';
import { CSSColors } from '../../styles/color';

const CalenderMain = styled.main`
  background-color: ${CSSColors.bg};
  width: 40rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  .days {
    padding: auto;
    height: 3.5rem;
    border-bottom: 2px solid ${CSSColors.line};
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
      border-right: 1px solid ${CSSColors.line};
      border-top: 1px solid ${CSSColors.line};
    }
    .day:nth-child(7n + 1) {
      color: ${CSSColors.sun};
      border-left: 1px solid ${CSSColors.line};
    }
    .day:nth-child(7n) {
      color: ${CSSColors.sat};
    }
  }
`;

export default CalenderMain;

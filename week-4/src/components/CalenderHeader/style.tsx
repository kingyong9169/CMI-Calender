import styled from 'styled-components';
import { CSSColors } from '../../styles/color';

const CalenderHeader = styled.header`
  justify-content: center;
  margin: auto;
  display: flex;
  .prev,
  .next {
    color: ${CSSColors.bg};
    padding: auto;
    font-size: 2rem;
    border: none;
    outline: none;
  }
  .currentMonth {
    color: ${CSSColors.bg};
    text-align: center;
    width: 10rem;
    margin: auto 2rem;
  }
`;

export default CalenderHeader;

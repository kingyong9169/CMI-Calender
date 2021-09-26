import Calender from './components/Calender';
import StyledApp from './styles/style';

export default function App() {
  return (
    <StyledApp>
      <header className="calenderTitle">Calender</header>
      <Calender />
    </StyledApp>
  );
}

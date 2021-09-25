import Calender from './components/Calender';
import StyledApp from './styles/style';

const App: React.FC = () => {
  return (
    <StyledApp>
      <header className="calenderTitle">Calender</header>
      <Calender />
    </StyledApp>
  );
};

export default App;

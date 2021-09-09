import Calender from "./components/Calender";
import StyledApp from "./styles/style";

function App() {
  return (
    <StyledApp>
      <div className="App">
        <header className="calenderTitle">Calender</header>
        <Calender />
      </div>
    </StyledApp>
  );
}

export default App;

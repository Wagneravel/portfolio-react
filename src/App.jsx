import { Dashboard } from "./components/Dashboard";
import { Techs } from "./components/Techs";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
      <Techs />
    </>
  );
}

export default App;
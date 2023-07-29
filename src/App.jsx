import { Dashboard } from "./components/Dashboard";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
      <Techs />
      <Projects />
    </>
  );
}

export default App;
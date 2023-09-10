import "./App.css";
import Logo from "./componentes/Logo";
import OpcoesHeader from "./componentes/OpcoesHeader";
import IconesHeader from "./componentes/IconesHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;

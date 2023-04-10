import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Panel from "./components/Panel";
import data from "./data"

function App() {
  const panels = data.map(data => {
    return <Panel
              {...data}
          />
  })
  return (
    <div className="App">
      <Header />
      {panels}
    </div>
  );
}

export default App;

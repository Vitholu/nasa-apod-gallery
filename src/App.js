import './App.css';
import Header from "./header/Header.jsx"
import Body from "./body/Body.jsx"

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
          <Header />
      </header>

      <div className="Body">
        <div className="App-body">
            <Body />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

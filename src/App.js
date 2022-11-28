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

      <div className="body">
        <div className="App-body">
            <Body id={0}/>
            <Body id={1}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

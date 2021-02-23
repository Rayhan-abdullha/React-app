import logo from "./logo.svg";
import "./App.css";
function App() {
  var style = {
    backgroundColor: 'skyblue',
    color: '#444',
    padding: '5px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person></Person>
        <h3 className="" style={style}>Bangla Bhai</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}
function Person() {
  return (<div>
    <h3>React App</h3>
    <h4>Creat by Abdullah</h4>
  </div>)
}


export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to hours tracker!
        </h1>
        Input your work hours: <input type="text" id="hourEnteries"></input>
        <button onClick={calculateHours}>Get total hours</button>
      </header>
    </div>
  );
}

function calculateHours() {
  var hourEnteries = document.getElementById("hourEnteries")
    .value
    .split(" ")
    .map(parseTimeEntry)
    .reduce((minutes1, minutes2) => minutes1 + minutes2);
  
  alert(hourEnteries / 60);
}

function parseTimeEntry(time) {
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);

  return hours * 60 + minutes;
}

export default App;

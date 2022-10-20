import React from 'react';

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
        <Calendar />
        <label>Inpuput the hours your worked each day in military time format and separated by spaces:</label>
        <input type="text" id="hourEnteries" style={{width: "185px"}} placeholder='08:00 09:00 08:30 06:15 08:15'></input>
        <button onClick={calculateHours}>Get total hours</button>
      </header>
    </div>
  );
}

function calculateHours() {
  var totalMinutes = document.getElementById("hourEnteries")
    .value
    .split(" ")
    .map(parseTimeEntry)
    .reduce((minutes1, minutes2) => minutes1 + minutes2);
  
  let minutes = totalMinutes % 60;
  let hours = (totalMinutes - minutes) / 60   
  alert(`Total hours: ${hours}:${minutes}`);
}

function parseTimeEntry(time) {
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);

  return hours * 60 + minutes;
}

const CurrentDate = () => {
  return(
    <div>
      <h2>Todays date: {Date()}</h2>
    </div>
  )
}

class Calendar extends React.Component {
  render() {
    return(
      <div>
        <CurrentDate />
      </div>
    )
  }
}

export default App;

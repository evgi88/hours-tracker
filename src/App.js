import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Calendar } from './Calendar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to hours tracker!
        </h1>
        <Calendar />
        <label>Input the hours your worked each day in military time format and separated by spaces:</label>
        <input type="text" id="hourEnteries" className='hours-input' placeholder='08:00 09:00 08:30 06:15 08:15'></input>
        <button onClick={calculateHours}>Get total hours</button>
        <button onClick={saveTimeEntries}>Save time entries</button>
      </header>
    </div>
  );
}

function calculateHours() {
  let totalMinutes = document.getElementById("hourEnteries")
    .value
    .split(" ")
    .map(parseTimeEntry)
    .reduce((minutes1, minutes2) => minutes1 + minutes2);
  
  let minutes = totalMinutes % 60;
  let hours = (totalMinutes - minutes) / 60   
  alert(`Total hours: ${hours}:${minutes}`);

  return totalMinutes;
}

function parseTimeEntry(time) {
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);

  return hours * 60 + minutes;
}

function saveTimeEntries() {
  let timeEntries = document.getElementById("hourEnteries")
    .value
    .split(" ")
  
  persistData(
    {
      "timeEntries": timeEntries,
      "totalHoursWorked": calculateHours / 60,
      "Date": Date.now(),
    }
  )
}

function persistData(data) {
  const dataToPersist = JSON.stringify(data);
  const blob = new Blob([dataToPersist], { type: 'text/plain'});
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = "time-entries.json";
  link.href = url;
  link.click();
}

export default App;

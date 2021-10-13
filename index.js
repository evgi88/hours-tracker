const express = require("express");

var app = express();
const PORT = 7000;

var hourEnteries = process.argv.slice(2);
console.log(`hoursEnteries: ${hourEnteries}`)
var totalHours = (hourEnteries.map(hourEntry => parseTime(hourEntry))
    .reduce((num1, num2) => num1 + num2)) / 60;

function parseTime(time) {
    let minutes = parseInt(time.split(":")[1]);
    let hours = parseInt(time.split(":")[0]);
    let totalMinutes = hours * 60 + minutes;

    return totalMinutes;
}

app.get("/" , function(request, response) {
    let responseString = `Welcome to the Hours Tracker web-app!\n` +
        `The total number of hours is: ${totalHours}`;

    response.send(responseString);
})

app.listen(PORT, function () {
    console.log(`Started application on port ${PORT}`);
});
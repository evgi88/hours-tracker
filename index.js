const express = require("express");

var app = express();
const PORT = 7000;

app.get("/" , function(request, response) {
    response.send("Welcome to the Hours Tracker web-app!");
})

app.listen(PORT, function () {
    console.log(`Started application on port ${PORT}`);
});
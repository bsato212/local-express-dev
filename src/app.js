// Includes Express library
const express = require('express');

// Creates an Express App
var app = express();
app.use(express.static(__dirname + "/static-assets"));

app.get('/', (req, res) => {
  res.send('This is main');
});

// Exports the Express App
module.exports = app;

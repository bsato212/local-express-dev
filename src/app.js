// Includes Express library
const express = require('express');

// Creates an Express App
const app = express();
// Enables JSON and URL-Encoded parameter parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creates a GET handler for /
app.post('/', function (req, res) {
  // Logs query string parameters and headers
  console.log(`Query string parameters [${JSON.stringify(req.body, null, '  ')}]`);
  console.log(`Request headers [${JSON.stringify(req.headers, null, '  ')}]`);
  
  let name = '';
  if(req.body.name != "") {
    name = req.body.name;
  } else {
    name = 'World';
  }

  res.status(200);
  res.send(`Hello ${name}!`);
});

// Error handler
app.use(function (error, req, res, next) {
  console.error(error);
  res.status(500);
  res.send('Error');
});

// Exports the Express App
module.exports = app;

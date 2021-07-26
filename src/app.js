// Includes Express library
const express = require('express');

// Creates an Express App
var app = express();
app.use('/static', express.static(__dirname + "/static-assets"));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Assignment 13',
    header1: 'View engine HTML',
    p1: 'index.pug'
  });
});

// Exports the Express App
module.exports = app;

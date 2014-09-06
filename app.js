var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/views'));

app.get('/template', function (req, res) {
  res.render('ticket', {
    ticket: req.query
  });
});

app.get('/A6_template', function (req, res) {
  res.render('A6_template', {
    ticket: req.query
  });
});

exports.app = app;
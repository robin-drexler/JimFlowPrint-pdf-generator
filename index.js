var PORT = process.env.PORT || 3000;

var express = require('express');
var app = require('./app').app;
app.set('view engine', 'jade');


app.use(express.static(__dirname + '/views'));

app.get('/template', function (req, res) {
  res.render('template', {
    ticket: req.query
  });
});

app.listen(PORT);
console.log('Server started');
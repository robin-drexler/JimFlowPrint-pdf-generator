var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.set('view engine', 'jade');


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

app.listen(PORT);
console.log('Server started');
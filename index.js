var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.params);
  res.send('Hello Worlds')
});

app.listen(3000);
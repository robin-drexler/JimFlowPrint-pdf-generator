var PORT = process.env.PORT || 3000;
var app = require('./app').app;
var config = require('./config');


app.listen(config.port);
console.log('Server started');
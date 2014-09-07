var PORT = process.env.PORT || 3000;
var app = require('./app').app;


app.listen(PORT);
console.log('Server started');
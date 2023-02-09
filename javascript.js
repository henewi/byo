// Declaring dependancies

const express = require('express');
const app = express();

// Main server and listener, http://localhost:8888/ 

app.get('/', function(req, res) {
  res.send('Dingleberry has arrived on port ' + listener.address().port + '!')
});

var listener = app.listen(8888, function(){
  console.log('Server is listening on port ' + listener.address().port + '...');
});

// Testing with another path, http://localhost:8888/path

app.get('/path'), function(req, res) {
  res.send('You reached the path page, cheeky don!')
}
var express = require("express");

var app = express();

app.get('/', function(req, res) {
  res.status(200).send('root');
});

app.get('/set', function(req, res) {
  res.send(req.query.something);
});

var server = app.listen(4000, function() {
  console.log("please navigate to http://localhost:4000 in your client")
})

module.exports = server;

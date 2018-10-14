var express = require("express");
var app = express();

var data

app.get('/set', function(req, res) {
  data = req.query
  res.end()
});

app.get('/get', function(req, res) {
  res.send(data[req.query.key])
})

var server = app.listen(4000, function() {
  console.log("please navigate to http://localhost:4000 in your client")
})

module.exports = server;

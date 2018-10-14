var express = require("express");
var session = require('express-session')
var app = express();
app.use(session({secret: "secret",
                 resave: false,
                 saveUninitialized: false}));

app.get('/set', function(req, res) {
  req.session.data = req.query
  res.end()
});

app.get('/get', function(req, res) {
  if (req.session.data != null) {
    res.send(req.session.data[req.query.key])
  }
  res.send()
})

var server = app.listen(4000, function() {
  console.log("please navigate to http://localhost:4000 in your client")
})

module.exports = server;

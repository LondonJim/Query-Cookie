var cookieParser = require("cookie-parser")
var express = require("express")
var app = express()

app.use(cookieParser())

app.get('/set', function(req, res) {
  res.cookie('cookieName',req.query , { maxAge: 900000, httpOnly: true })
    .end()
})

app.get('/', function(req, res) {
  var cookie = req.cookies.cookieName
  res.send(JSON.stringify(cookie))
    .end()
})

var server = app.listen(4000, function() {
  console.log("please navigate to http://localhost:4000 in your client")
})

module.exports = server;

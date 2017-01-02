var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('This is the response that sends whatever you want!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
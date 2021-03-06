var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());
var out = fs.readFileSync("index.html","utf-8");

app.use(express.static(__dirname + '/img'));

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

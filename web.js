var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer("Hello World from index.html",25);

app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html","rtf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var fs = require('fs');
var buffer;;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFileSync('index.html', 'utf8', function (err,data) {
if(err)
{
return console.log(err);
}
buffer = data;
});
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

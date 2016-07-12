var express = require('express');

var App = express();

App.get('/', function(request, response) {
  response.send('hello world');
});

App.get('/headers', function(request, response) {
  var echo = request.headers;
  response.send(echo).json;
});

App.get('/headers/:header_name', function(request, response) {
  var headerName = request.headers[request.params.header_name];
  response.send(headerName);
});

App.get('/version', function(request, response) {
  var version = request.httpVersion;
  response.send(version);
});

App.listen((process.env.PORT || 8080));

exports.App = App;

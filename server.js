var express = require('express');

var App = express();

App.get('/', function(request, response) {
  response.send('This site is under construction. Please come back later :)');
});

App.listen((process.env.PORT || 8080));

exports.App = App;

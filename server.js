var express = require('express');

var App = express();

App.use(express.static(__dirname));

App.get('*', function(req, res){
  res.sendfile(__dirname + 'index.html');
});

App.listen((process.env.PORT || 8080));

exports.App = App;

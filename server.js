const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
res.sendfile('index.html');
});

app.listen(process.env.PORT || 8080);

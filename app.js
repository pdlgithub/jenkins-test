var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World - Jenkins test");
});

app.listen(4000);
console.log('listening on 4000')
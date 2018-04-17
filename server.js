

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');


var app= express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);
app.get('*',(req,res)=> {  res.sendFile(path.join(__dirname,'dist/index.html'));    }); //define entry as index.html in dist folder
app.listen(3000, function(){  console.log("Server running on port 3000");  });

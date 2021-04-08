var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');

var app = express();

app.use((req,res,next)=>{
    console.log('====================================');
    console.log("Reacived app.js ",req.originalUrl);
    console.log('====================================');
    next()
})
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));

app.use('/', indexRouter);
module.exports = app;
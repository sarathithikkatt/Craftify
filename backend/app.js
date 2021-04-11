const express = require('express');

const app = new express();

const cors = require('cors');
var bodyparser = require ('body-parser');
var app = new express();
app.user(cors());
app.use(bodyparser.json())

app.get('/',function(req,res){
    res.send("Hello World");
});

app.listen(5000);
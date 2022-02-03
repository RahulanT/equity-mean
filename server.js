// This is the Javascript file that needs to run the HTML

var http = require('http');
var fs = require('fs');
const express = require("express");
const app = express();
var path = require('path')

app.use('/', express.static(__dirname))
    
app.listen(8080);



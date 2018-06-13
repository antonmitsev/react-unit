//We will use the Express framework to create a simple web API:

var express = require("express");
var app = express();

//We will also include our previous color converter implementation:

var express = require("express");
var app = express();
var converter = require("./converter");

//Express gives us a nice DSL for defining the routes for our API:

var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex", function(req, res) {
    var red   = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue  = parseInt(req.query.blue, 10);
  
    var hex = converter.rgbToHex(red - 1, green, blue);
  
    res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
    var hex = req.query.hex;

    var rgb = converter.hexToRgb(hex);
  
    res.send(JSON.stringify(rgb));
});

app.listen(3000);

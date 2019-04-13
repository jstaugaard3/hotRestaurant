// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//Data
var waitListArray = [
  {
    customer: "",
    email: "",
    ID: "",
    phone: ""
}
];

module.export=waitListArray;



var tableListArray = [
  {
    customer: "",
    email: "",
    ID: "",
    phone: ""
}
];

module.export=tableListArray;

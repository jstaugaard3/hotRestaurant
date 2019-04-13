// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});




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

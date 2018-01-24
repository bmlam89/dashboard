var express = require("express");
var app = express();

const parser = require("body-parser");
const path = require("path");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js');

app.listen(8000, function() {
 console.log("listening on port 8000");
});

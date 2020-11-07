const express = require("express");

const path = require("path");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/box", (req, res) => {
	res.render("box");
});

module.exports = app;
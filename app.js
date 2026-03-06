const express = require("express");

const path = require("path");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public"), {
    maxAge: "7d",
    immutable: true
}));

// Routes
app.use('/', require('./app/routes/index'));

module.exports = app;
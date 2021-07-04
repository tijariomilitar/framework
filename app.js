const express = require("express");

const path = require("path");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/view'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => { res.render("index"); });

app.get("/getting-started/fundamentals", (req, res) => { res.render("documentation/getting-started/fundamentals"); });
app.get("/getting-started/instalation", (req, res) => { res.render("documentation/getting-started/instalation"); });

app.get("/structure/container", (req, res) => { res.render("documentation/structure/container"); });
app.get("/structure/box", (req, res) => { res.render("documentation/structure/box"); });
app.get("/structure/position", (req, res) => { res.render("documentation/structure/position"); });
app.get("/structure/responsive", (req, res) => { res.render("documentation/structure/responsive"); });

app.get("/js-library/date", (req, res) => { res.render("documentation/js-library/date"); });

module.exports = app;
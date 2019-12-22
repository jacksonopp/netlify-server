'use strict';
// imports
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const logger = require("morgan");

// set up express app
const app = express();

//set up router
const router = express.Router();


// set up middleware
app.use(bodyParser.json()); // Bodyparser
app.use(logger("dev"))
app.use(express.static("public"))
// import routes
require("../routes/apiRoutes")(router)
require("../routes/htmlRoutes")(router)

//initial route
router.get("/", (req, res) => {
  // res.writeHead(200, { 'Content-Type': "text/html" });
  // res.write('<h1>Hello World!</h1>');
  // res.end();
  // res.json({ message: "hello" })
})

app.use('/.netlify/functions/server', router); // lambda route
app.use('/', (req, res) => res.send('index.html'));

module.exports = app;
module.exports.handler = serverless(app);

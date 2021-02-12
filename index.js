const express = require("express");
const path = require("path");
var cors = require("cors");
const PORT = process.env.PORT || 5000;
require("./database/connect_mongo");
const routes = require("./routes/route");
const bodyParser = require("body-parser");

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders:
    "Content-Type,X-Requested-With,authorization,accesstoken, sessionid",
};

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(cors(corsOptions))

  .use(
    bodyParser.json({
      limit: "50mb",
    })
  )
  .use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
  )
  .use(routes)
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

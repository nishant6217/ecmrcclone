const express = require("express");

const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const DefaultData = require("./default.js");


const db = require("./config/mongoose");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

DefaultData();
app.use("/", require('./routes/routes'));
app.listen(PORT, (error) => {
  if (error) {
    console.log("error in running the server");
  }
  console.log(`server is running on ${PORT}`);
});

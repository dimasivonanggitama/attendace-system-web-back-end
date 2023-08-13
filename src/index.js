const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, '../.env')
})
const port = process.env.PORT || 8000;
const db = require("./models");

const express = require("express");
const app = express();

app.use(express.json());

app.listen(port, function () {
  console.log(`server is running on localhost ${port}`)
})
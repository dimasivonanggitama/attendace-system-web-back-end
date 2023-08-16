const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, '../.env')
})
const port = process.env.PORT || 8000;
const db = require("./models");

const express = require("express");
const cors = require("cors");
const app = express();

// const { home } = require("./");
const { roleRoutes } = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/api/admin/role", roleRoutes);
app.use("/api/admin/user", userRoutes);

app.listen(port, function () {
  console.log(`server is running on localhost ${port}`)
})
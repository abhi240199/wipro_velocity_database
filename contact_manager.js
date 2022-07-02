const express = require("express");
const db = require("./configs/mongoose");
const path = require("path");

// const Contact = require("./models/contact");
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});

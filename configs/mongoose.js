const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wipro_db");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("errror in creating db", err);
});
db.once("open", () => {
  console.log("Succesfully connected to the database");
});

module.exports = mongoose;

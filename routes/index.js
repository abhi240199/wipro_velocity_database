const express = require("express");
const router = express.Router();

router.use("/contact", require("./contact"));

router.get("/", (req, res) => {
  res.send("Welcome to me");
});

module.exports = router;

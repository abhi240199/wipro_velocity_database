const express = require("express");
const router = express.Router();

router.use("/contact", require("./contact"));
router.use("/user", require("./user"));

// router.use("/contact-swagger", require("./contactswagger"));

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;

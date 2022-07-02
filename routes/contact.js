const express = require("express");
const router = express.Router();
const contactConroller = require("../controllers/contactController");

router.get("/", contactConroller.getContact);
router.post("/add-contact", contactConroller.addContact);
router.get("/delete-contact/:id", contactConroller.deleteContact);

module.exports = router;

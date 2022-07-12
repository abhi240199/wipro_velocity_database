const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authtoken");
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/signin", userController.signIn);
router.get("/signup", userController.signUp);

router.post("/create-session", userController.createSession);
router.post("/delete-user", authentication, userController.deleteUser);
router.post("/update-password", authentication, userController.updatePassword);

module.exports = router;

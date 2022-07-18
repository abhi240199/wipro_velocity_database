const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/create", todoController.createTask);
router.get("/get-tasks", todoController.getTasks);

router.get("/pending-tasks", todoController.pendingTasks);
router.get("/completed-tasks", todoController.completedTasks);

router.get("/done-task/:id", todoController.doneTask);
router.get("/delete-task/:id", todoController.deleteTask);

module.exports = router;

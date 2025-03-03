const express = require("express");
const taskController = require("../controllers/task");

const router = express.Router();

// Create a new task
router.post("/createtasks", taskController.createTask);

// Get all tasks
router.get("/tasks", taskController.getTasks);

// Update a task
router.put("/tasks/:id", taskController.updateTask);

// Delete a task
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
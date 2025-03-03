const Task = require('../models/task');

//create new task
const createTask = async (req, res) => {
    try {
      const { name, subject, type, date, time } = req.body;
  
      const task = new Task({
        name,
        subject,
        type,
        date,
        time,
      });
  
      await task.save();
      res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
      res.status(500).json({ message: "Error creating task", error: error.message });
    }
  };

// Get all tasks
const getTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
  };
  
// Update a task
const updateTask = async (req, res) => {
    try {
      const { id } = req.params; // Get task ID from URL params
      const { name, subject, type, date, time } = req.body;
  
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { name, subject, type, date, time },
        { new: true } // Return the updated task
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
      res.status(500).json({ message: "Error updating task", error: error.message });
    }
  };
  
  // Delete a task
  const deleteTask = async (req, res) => {
    try {
      const { id } = req.params; // Get task ID from URL params
  
      const deletedTask = await Task.findByIdAndDelete(id);
  
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
    } catch (error) {
      res.status(500).json({ message: "Error deleting task", error: error.message });
    }
  };
  
  module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
  };
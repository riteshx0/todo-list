// Import the Task model
import Task from "../models/taskModel.js";
import mongoose from "mongoose";


// Create a new task
export const createTask = async (req, res) => {
  const { title, description } = req.body; // Get title and description from request body

  try {
    const newTask = new Task({
      title,
      description,
      status: "pending", // status kept by default 'pending'
    });

    // Save the new task to the database
    await newTask.save();

    // Respond with the newly created task
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database

    // Respond with all tasks
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

// Get task by ID
export const getTaskById = async (req, res) => {
  const { id } = req.params; // id received through params

  try {
    const task = await Task.findById(id); // Find task by id

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // if task exists
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error fetching task" });
  }
};

// Update task status by ID
export const updateTaskStatus = async (req, res) => {
  const { id } = req.params; // id from request parameter
  const { status } = req.body;

  // Validating status
  if (!["pending", "in-progress", "completed"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const task = await Task.findById(id); // Find task by Id

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update the task's status
    task.status = status;
    await task.save(); // Save the updated task

    // Respond with the updated task
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// Delete task by ID
export const deleteTask = async (req, res) => {
  const { id } = req.params; // Get task ID from request parameters
  
  try {
     // Validate ID format
     if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const task = await Task.findByIdAndDelete(id); // Find task by ID

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    

    // Respond with a success message
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};

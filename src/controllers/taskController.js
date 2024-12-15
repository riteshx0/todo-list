// Import the Task model
import Task from "../models/taskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  const userId = req.body.userId; // Getting userId from the request body from authUser

  const { title, description, status } = req.body; // Get title and description from request body

  try {
    const newTask = new Task({
      title,
      description,
      status: status || "pending", // Default status to "pending"
      userId, // Associate the task with the authenticated user
    });

    const savedTask = await newTask.save(); // Save the task to the database

    // Respond with the newly created task
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  const userId = req.body.userId; // Getting userId from the request body from authUser

  try {
    // Only get tasks that belong to the authenticated user
    const tasks = await Task.find({ userId });

    // Respond with all tasks
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

// Get task by ID
export const getTaskById = async (req, res) => {
  const userId = req.body.userId; // Getting userId from the request body from authUser
  const { id } = req.params; // id received through params

  try {
    const task = await Task.findOne({ _id: id, userId }); // Check if the task belongs to the authenticated user

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
  const userId = req.body.userId;
  // Validating status
  if (!["pending", "in-progress", "completed"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const task = await Task.findOne({ _id: id, userId });

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

  const userId = req.body.userId;

  try {
    const task = await Task.findOneAndDelete({ _id: id, userId }); // Find task by ID and authenticated user

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Respond with a success message
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};

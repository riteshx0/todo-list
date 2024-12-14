import express from "express";
import { createTask, getTasks, getTaskById, updateTaskStatus, deleteTask } from "../controllers/taskController.js";

// Initialize the router
const router = express.Router();

// Define task-related routes
router.post("/", createTask);             // Create a new task
router.get("/", getTasks);                // Get all tasks
router.get("/:id", getTaskById);          // Get task by ID
router.put("/:id", updateTaskStatus);    // Update task status by ID
router.delete("/:id", deleteTask);       // Delete task by ID

export default router;

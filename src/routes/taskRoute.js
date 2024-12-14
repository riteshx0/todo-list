import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask,
} from "../controllers/taskController.js";
import validateObjectId from "../middlewares/validateObjectId.js";
// Initialize the router
const router = express.Router();

// Define task-related routes
router.post("/", createTask); // Create a new task
router.get("/", getTasks); // Get all tasks
router.get("/:id", validateObjectId, getTaskById); // Get task by ID
router.put("/:id", validateObjectId, updateTaskStatus); // Update task status by ID
router.delete("/:id", validateObjectId, deleteTask); // Delete task by ID

export default router;

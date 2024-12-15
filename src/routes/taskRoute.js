import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask,
} from "../controllers/taskController.js";
import validateObjectId from "../middlewares/validateObjectId.js";
import authUser from "../middlewares/authUser.js";
// Initialize the router
const router = express.Router();

// Define task-related routes with authentication middleware
router.post("/",authUser,createTask); // Create a new task
router.get("/",authUser,getTasks); // Get all tasks
router.get("/:id",authUser, validateObjectId, getTaskById); // Get task by ID
router.put("/:id",authUser, validateObjectId, updateTaskStatus); // Update task status by ID
router.delete("/:id",authUser, validateObjectId, deleteTask); // Delete task by ID

export default router;

import mongoose from "mongoose";

// Define the Task schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, 
    },
    description: {
      type: String,
      required: true,
      trim: true, 
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending", // Default status is "pending"
    },
  },
  {
    // create and update field added 
    timestamps: true, 
  }
);

// Create the Task model
const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);

export default taskModel;

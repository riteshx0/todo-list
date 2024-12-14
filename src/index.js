import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Importing database  connection function and routes
import {connectDB} from "./config/db.js";

// importing routes
import taskRouter from "./routes/taskRoute.js";  

// loading  environment variables
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middlewares
app.use(express.json());  
app.use(cors()); 

// API Endpoints
app.use("/api/tasks", taskRouter);  // Task routes for the to-do list
app.get("/", (req, res) => {
  res.send("To-Do List API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

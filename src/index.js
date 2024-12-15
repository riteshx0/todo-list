
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// middleware for parsing cookies
import cookieParser from "cookie-parser";

// Importing database  connection function and routes
import { connectDB } from "./config/db.js";

// importing routes
import taskRouter from "./routes/taskRoute.js";
import authRouter from "./routes/authRoute.js";

// loading  environment variables
dotenv.config();

// App Config
const app = express();

// default port number
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middlewares
app.use(cookieParser()); // to parse cookies
app.use(express.json()); // to parse json body
app.use(cors()); // for frontend requests

// API Endpoints
app.use("/api/tasks", taskRouter); // Task routes
app.use("/api/auth", authRouter); // Auth routes
app.get("/", (req, res) => {      //  Root route
  res.send("To-Do List API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

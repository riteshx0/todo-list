import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const authRouter = express.Router();

// User registration and login routes
authRouter.post("/register", registerUser); // for user registration
authRouter.post("/login", loginUser);  // for user login
authRouter.post("/logout", logoutUser); // for user logout

export default authRouter;

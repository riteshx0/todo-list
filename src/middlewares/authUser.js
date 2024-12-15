import jwt from "jsonwebtoken";
import User from "../models/userModel.js";  // Import the User model


//  Middleware to authenticate user using JWT stored in cookies
 
const authUser = async (req, res, next) => {
  try {
    // Extract token from the cookies 
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token missing. Please login.",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //  Attaching user to req object for further handling
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;  // Assign the user object to the request object

    // Proceed to the next middleware/handler
    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authUser;
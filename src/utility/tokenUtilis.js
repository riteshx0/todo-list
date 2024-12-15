// Utility to create JWT token

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

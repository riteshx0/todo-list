// middleware to check valid objectid 

import mongoose from "mongoose";

const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  next(); 
};

export default validateObjectId;

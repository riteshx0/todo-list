import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

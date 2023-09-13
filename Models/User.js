import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  country: { type: String },
  password: { type: String, required: true }
});

// Create the model
const User = mongoose.model('User', userSchema)

// Export the model
export default User

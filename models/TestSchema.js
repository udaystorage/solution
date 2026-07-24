import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Checks the cache first, falls back to compiling if it doesn't exist
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

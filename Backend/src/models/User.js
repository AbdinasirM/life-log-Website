// Import required libraries and modules.
const mongoose = require("mongoose"); // MongoDB ODM library.
const validator = require("validator"); // Validation library.
const bcrypt = require("bcrypt"); // Password hashing library.
const jwt = require("jsonwebtoken"); // JSON Web Token library.

// Create a blueprint for the user schema.
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid email address" });
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Middleware: Hash the password before saving the user Model object.
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Method to generate an authentication token for the user.
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// Static method to find a user by their login credentials.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ message: "Invalid login credentials" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ message: "Invalid login credentials" });
  }
  return user;
};

// Create the User model using the defined schema.
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application.
module.exports = User;

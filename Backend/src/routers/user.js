const express = require("express"); // Web framework for creating API routes.
const User = require("../models/User"); // Import the User model for database interaction.
const auth = require("../middleware/auth"); // Custom middleware for user authentication.
const router = express.Router(); // Create a new router instance for defining routes.
const Note = require("../models/Notes");

// Route to create a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body); // Create a new User instance with request data.
    await user.save(); // Save the user data to the database.
    const token = await user.generateAuthToken(); // Generate an authentication token.
    res.status(201).send({ user}); // Respond with the user data and token.
  } catch (error) {
    res.status(400).send(error.message); // Handle validation or save errors.
  }
});

// Route to login a registered user
router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from request.
    const user = await User.findByCredentials(email, password); // Find user by credentials.
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken(); // Generate an authentication token.
    res.send({ user, token }); // Respond with user data and token.
  } catch (error) {
    res.status(400).send(error); // Handle errors during login process.
  }
});

// // Route to view the profile of the logged-in user
// router.get('/users/me', auth, async(req, res) => {
//   try {
//     res.send(`Welcome, ${req.user.name}, \n\n${req.user}`); 
//     res.send(`Welcome, ${req}`); // Respond with the user's name.
//   } catch (error) {
//     res.status(500).send(error); // Handle server errors.
//   }
// });

// Route to view the profile of the logged-in user along with their journals
router.get('/users/me', auth, async (req, res) => {
  try {
    const user = req.user; // The authenticated user object
    const journals = await Note.find({ createdBy: user._id }); // Fetch journals created by the user
    
    res.json({
      user: {
        name: user.name,
        email: user.email,
        // Include any other user properties you want to send
      },
      journals: journals
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to log out a user and delete the current session token
router.post('/users/me/logout', auth, async (req, res) => {
  try {
      req.user.tokens = req.user.tokens.filter((token) => {
          return token.token != req.token; // Remove the current token from user's tokens.
      });
      await req.user.save(); // Save the user with updated token list.
      res.send(); // Respond with a success message.
  } catch (error) {
      res.status(500).send(error); // Handle server errors.
  }
});

//Route to log out from all platforms and delete all registered tokens
// router.post('/users/me/logoutall', auth, async (req, res) => {
//   try {
//     req.user.tokens.splice(0, req.user.tokens.length); // Remove all tokens from user's tokens array.
//     await req.user.save(); // Save the user with an empty token list.
//     res.status(200).send("User logged out from all platforms"); // Respond with success message.
//   } catch (error) {
//     res.status(500).send(error); // Handle server errors.
//   }
// });

// Route to log out from all platforms and delete all registered tokens
router.post('/users/me/logoutall', auth, async (req, res) => {
  try {
    req.user.tokens = []; // Clear all tokens
    await req.user.save();
    res.status(200).json({ message: "User logged out from all platforms" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router; // Export the router with defined routes.

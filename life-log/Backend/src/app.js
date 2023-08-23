const express = require('express'); // Web framework for creating API routes.
const userRouter = require('./routers/user'); // Import the user router.
const JournalRouter = require('./routers/notes'); // Import the journal
const journalDB = require('./db/journals_db'); // Import the journals database connection
const port = process.env.PORT; // Port number to listen on.
const cors = require('cors'); // CORS middleware for handling cross-origin requests.
const journalModel = require('./models/Notes'); // Import the journal model
const wellnessRouter = require('./routers/wellness'); //
// const wellnesDBUrl = require('./db/wellness');
// Import required modules and setup
require("dotenv").config(); // If using .env for environment variables
// require("./db/auth_db");
// require("./db/journals_db");

const app = express(); // Create an Express application instance.

app.use(express.json()); // Middleware to parse JSON in request bodies.

// Set up CORS middleware to handle cross-origin requests.
app.use(cors());

app.use(express.json()); // Middleware to parse JSON in request bodies.
app.use(userRouter); // Use the user router to handle user-related routes.
app.use(JournalRouter); // Use the journal router to handle journal-related routes.
app.use(wellnessRouter); // Use the wellness router to handle wellness-related routes.

app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Start the server and log a message.
});
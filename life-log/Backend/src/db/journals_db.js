const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided connection string from the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection object
const journalDB = mongoose.connection;

// Event handler for connection errors
journalDB.on("error", console.error.bind(console, "Connection error:"));

// Event handler for successful connection
journalDB.once("open", () => {
  console.log("Connected to the database");
});

// Export the connection object
module.exports = journalDB;

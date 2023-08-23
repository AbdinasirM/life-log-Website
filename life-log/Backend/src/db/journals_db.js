const mongoose = require("mongoose");
// Connect to the MongoDB database using the provided connection string
mongoose.connect("mongodb+srv://plstk7623:ezXHp1fGqSxx0A8y@cluster0.bxipjxd.mongodb.net/note-taking-db", {
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
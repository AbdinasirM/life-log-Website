// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_JOURNAL_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection error:"));
// db.once("open", () => {
//   console.log("Connected to journals database");
// });

// module.exports = db;

const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://plstk7623:ezXHp1fGqSxx0A8y@cluster0.bxipjxd.mongodb.net/note-taking-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const journalDB = mongoose.connection;
journalDB.on("error", console.error.bind(console, "Connection error:"));
journalDB.once("open", () => {
  console.log("Connected to the database");
});

module.exports = journalDB;


// const mongoose = require('mongoose');

// // Your journals database connection URL
// const journalsDBUrl = process.env.MONGODB_JOURNAL_URL;

// // Create a Mongoose instance
// const journalsDBConnection = mongoose.createConnection(journalsDBUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = journalsDBConnection;


// // journals_db.js
// const mongoose = require('mongoose');
// const journalsDBUrl = process.env.MONGODB_JOURNAL_URL;
// const journalsDBConnection = mongoose.createConnection(journalsDBUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// module.exports = journalsDBConnection;
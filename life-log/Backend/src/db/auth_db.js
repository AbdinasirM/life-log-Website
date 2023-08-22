// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_AUTH_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Authdb = mongoose.connection;
// Authdb.on("error", console.error.bind(console, "Connection error:"));
// Authdb.once("open", () => {
//   console.log("Connected to authentication database");
// });

// module.exports = Authdb;

// const mongoose = require("mongoose");

// const authDBUrl = process.env.MONGODB_AUTH_URL;

// const authDBConnection = mongoose.createConnection(authDBUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// authDBConnection.on("error", (error) => {
//   console.error("Authentication Database Connection Error:", error);
// });

// module.exports = authDBConnection;

// const mongoose = require('mongoose');

// // Your authentication database connection URL
// const authDBUrl = process.env.MONGODB_AUTH_URL;

// // Create a Mongoose instance
// const authDBConnection = mongoose.createConnection(authDBUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = authDBConnection;


const mongoose = require('mongoose');
const authDBUrl = process.env.MONGODB_AUTH_URL;
const authDBConnection = mongoose.createConnection(authDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = authDBConnection;

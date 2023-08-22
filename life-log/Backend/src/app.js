const express = require('express'); // Web framework for creating API routes.
const userRouter = require('./routers/user'); // Import the user router.
const JournalRouter = require('./routers/notes'); // Import the journal
const authDB = require('./db/auth_db'); // Import the authentication database connection
const journalDB = require('./db/journals_db'); // Import the journals database connection
const port = process.env.PORT; // Port number to listen on.
const cors = require('cors'); // CORS middleware for handling cross-origin requests.
const journalModel = require('./models/Notes'); // Import the journal model
// Import required modules and setup
require("dotenv").config(); // If using .env for environment variables
// require("./db/auth_db");
// require("./db/journals_db");

const app = express(); // Create an Express application instance.

app.use(express.json()); //
// Set up CORS middleware to handle cross-origin requests.
app.use(cors());

app.use(express.json()); // Middleware to parse JSON in request bodies.
app.use(userRouter); // Use the user router to handle user-related routes.
app.use(JournalRouter)
app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Start the server and log a message.
});

// const express = require('express');
// const userRouter = require('./routers/user');
// const JournalRouter = require('./routers/journal');
// const authDBConnection = require("./db/auth_db");
// const journalsDBConnection = require("./db/journals_db");
// const port = process.env.PORT;
// const cors = require('cors');

// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(userRouter);
// app.use(JournalRouter);

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });



// const express = require('express');
// const userRouter = require('./routers/user');
// const JournalRouter = require('./routers/journal');
// const authDBConnection = require('./db/auth_db');
// const journalsDBConnection = require('./db/journals_db');
// const port = process.env.PORT;
// const cors = require('cors');

// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Pass the Mongoose instances to your routes
// app.use((req, res, next) => {
//   req.authDBConnection = authDBConnection;
//   req.journalsDBConnection = journalsDBConnection;
//   next();
// });

// app.use(userRouter);
// app.use(JournalRouter);

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });



// const express = require('express');
// const authDBConnection = require('./db/auth_db');
// const journalsDBConnection = require('./db/journals_db');
// const userRouter = require('./routers/user');
// const journalRouter = require('./routers/notes');
// const port = process.env.PORT;
// const cors = require('cors');

// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Pass the Mongoose instances to your routes
// app.use((req, res, next) => {
//   req.authDBConnection = authDBConnection;
//   req.journalsDBConnection = journalsDBConnection;
//   next();
// });

// app.use(userRouter);
// app.use(journalRouter);

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

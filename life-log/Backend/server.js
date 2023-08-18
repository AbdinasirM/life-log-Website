const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/notes');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;


//create the express app
const app = express();



//setting up cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json()); // Use body-parser for JSON parsing


app.use('/', noteRoutes);


// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});




//setting up the server port
const PORT = process.env.PORT || 3000;
//listening to the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
const express = require('express'); // Import the Express framework
const mongoose = require('mongoose'); // Import the Mongoose library for MongoDB interactions


// Create a blueprint for the wellness schema.
const wellnessSchema = new mongoose.Schema({
    breakfast: {
        type: String,
        required: true,
    },
    lunch: {
        type: String,
        required: true,
    },
    dinner: {
        type: String,
        required: true
    },
    waterconsumption: {
        type: Number,
        required: true
    },
    exerciseHours: {
        type: Number,
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    snackNames: {
        type: String,
        required: true
    },
    snackCount: {
        type: Number,
        required: true
    },
    stepsTaken: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        default: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        default: 'user_id_here'
    }
});


// Create the Wellness model using the defined schema.
const Wellness = mongoose.model('Wellness', wellnessSchema);


// Export the Wellness model for use in other parts of the application.
module.exports = Wellness;
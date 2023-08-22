const express = require('express');
const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://images.unsplash.com/photo-1449364903531-9f176de63beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80'
        
    },
    text: {
        type: String,
        required: true
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



const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
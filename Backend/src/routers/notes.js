const express = require("express"); // Import the Express framework
const router = express.Router(); // Create a router instance
const Note = require("../models/Notes"); // Import the Note model
const auth = require("../middleware/auth"); // Import the authentication middleware


// Define the GET endpoint to fetch all notes
router.get("/notes", auth, async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user._id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//define a post endpoint to create a new note
router.post("/notes/add", auth, async (req, res) => {
  const note = new Note({ 
    title: req.body.title,
    text: req.body.text,
    about: req.body.about,
    img: req.body.img,
    createdBy: req.user.id,
 }); // Create a new note using the Note model

 try {
    const newNote = await note.save(); // Save the new note to the database
    res.json(newNote);// Respond with the fetched notes
}catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
 }
});

// Define the DELETE endpoint to delete a note using the ID of the note
router.delete('/notes/delete/:id', auth,async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); //
        res.json(deletedNote);
    }catch (error) {
        console.log(error);
    }
})

// Define the PUT(aka: update) endpoint to update a note using the ID of the note
router.put("/notes/update/:id", auth, async (req, res) => {
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title:req.body.title, text:req.body.text}, { new: true });
        res.json(updatedNote);
    }catch (error) {
        console.log({message: error});
    }
})


module.exports = router;// Export the router for use in other parts of the application

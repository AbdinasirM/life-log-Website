const express = require("express");
const router = express.Router();
const Note = require("../Models/Notes");

// Define the GET endpoint to fetch all notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find(); // Use the Note model to fetch all notes
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//define a post endpoint to create a new note
router.post("/notes/add", async (req, res) => {
  const note = new Note({ 
    title: req.body.title,
    text: req.body.text,
    about: req.body.about,
    img: req.body.img
 }); // Create a new note using the Note model

 try {
    const newNote = await note.save(); // Save the new note to the database
    res.json(newNote);
}catch (error) {
    res.status(500).json({ message: error.message });
 }
});

// Define the DELETE endpoint to delete a note using the ID of the note
router.delete('/notes/delete/:id', async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); //
        res.json(deletedNote);
    }catch (error) {
        console.log(error);
    }
})

// Define the PUT(aka: update) endpoint to update a note using the ID of the note
router.put("/notes/update/:id", async (req, res) => {
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title:req.body.title, text:req.body.text}, { new: true });
        res.json(updatedNote);
    }catch (error) {
        console.log({message: error});
    }
})


module.exports = router;

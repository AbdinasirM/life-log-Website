const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");
const auth = require("../middleware/auth")
const Wellness = require("../models/Wellness");

// Define the GET endpoint to fetch all notes
// router.get("/notes",auth, async (req, res) => {
//   try {
//     const notes = await Note.find({ createdBy: auth.id }); // Use the Note model to fetch all notes
//     res.json(notes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/wellness", auth, async (req, res) => {
  try {
    const wellness = await Wellness.find({ createdBy: req.user._id });
    res.json(wellness);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//define a post endpoint to create a new note
router.post("/wellness/add", auth, async (req, res) => {
  const wellness = new Wellness({ 
    breakfast: req.body.breakfast, 
    lunch: req.body.lunch,
    dinner: req.body.dinner,
    waterconsumption: req.body.waterconsumption,
    exerciseHours: req.body.exerciseHours,
    sleepHours: req.body.sleepHours,
    snackNames: req.body.snackNames,
    snackCount: req.body.snackCount,
    stepsTaken: req.body.stepsTaken,
    createdBy: req.user.id,
 }); // Create a new wellness using the Wellness model

 try {
    const newWellness = await wellness.save(); // Save the new note to the database
    res.json(newWellness); //
}catch (error) {
    res.status(500).json({ message: error.message });
 }
});

// Define the DELETE endpoint to delete a note using the ID of the note
router.delete('/wellness/delete/:id', auth,async (req, res) => {
    try {
        const deletedWellness = await Wellness.findByIdAndDelete(req.params.id); //
        res.json(deletedWellness);
    }catch (error) {
        console.log(error);
    }
})

// Define the PUT(aka: update) endpoint to update a note using the ID of the note
router.put("/wellness/update/:id", auth, async (req, res) => {
    try{
        const updatedWellness = await Wellness.findByIdAndUpdate(req.params.id, {
          breakfast: req.body.breakfast, 
          lunch: req.body.lunch,
          dinner: req.body.dinner,
          waterconsumption: req.body.waterconsumption,
          exerciseHours: req.body.exerciseHours,
          sleepHours: req.body.sleepHours,
          snackNames: req.body.snackNames,
          snackCount: req.body.snackCount,
          stepsTaken: req.body.stepsTaken,
          createdBy: req.user.id,
        }, { new: true });
        res.json(updatedWellness);
    }catch (error) {
        console.log({message: error});
    }
})


module.exports = router;

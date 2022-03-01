const router = require('express').Router();
const noteData = require('../db/store');
// const path = require('path');

//get, put, post, delete

//this should read the db.json file and return all saved notes as json
router.get("/notes", (req, res) => {
    noteData
        .getNotes()
        .then((notes) => {
            return res.json(notes)
        })
        .catch((err) => res.status(500).json(err))
});

/*this should should receive a new note to save on the request body, 
add it to the db.json file, and then return the new note to the client.
    You'll need to find a way to give each note a unique id when it's saved
        (look into npm packages that could do this for you).*/
router.post("/notes", (req, res) => {
    noteData
        .addNotes(req.body)
        .then((notes) => {
            return res.json(notes)
        })
        .catch((err) => res.status(500).json(err))
   

})

router.delete("/notes/:id", (req, res) => {
    noteData
        .deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err))
})

module.exports = router;

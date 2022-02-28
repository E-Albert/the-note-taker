const noteData = require('../db/store');
const api = require('express').Router();
// const path = require('path');

//get, put, post, delete

//this should read the db.json file and return all saved notes as json
api.get("/notes", (req, res) => {
    noteData.getNotes()
        .then((notes) => {
            return res.json(notes)
        }
        
    );
})

/*this should should receive a new note to save on the request body, 
add it to the db.json file, and then return the new note to the client.
    You'll need to find a way to give each note a unique id when it's saved
        (look into npm packages that could do this for you).*/
api.post("/notes", (req, res) => {

})

api.delete("/notes/:id", (req, res) => {
    
})
module.export = api;

//how to implement store in api route
//need a promise to allow user to CRUD
//error handling
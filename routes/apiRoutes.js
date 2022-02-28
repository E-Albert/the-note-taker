const noteData = require('../db/db.json');
const api = require('express').Router();
const path = require('path');

//get, put, post, delete

//this should read the db.json file and return all saved notes as json
api.get("/api/notes", (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
})

/*this should should receive a new note to save on the request body, 
add it to the db.json file, and then return the new note to the client.
    You'll need to find a way to give each note a unique id when it's saved
        (look into npm packages that could do this for you).*/
api.post("/api/notes", (req, res) => {

})

module.export = api;
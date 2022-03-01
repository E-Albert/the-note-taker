const fs = require('fs');
const util = require('util');
// const uuid = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read()
            .then((note) => {
                let information;
                try {  
                    information = [].concat(JSON.parse(note))

                } catch (err) {
                    
                    information = []

                }
                return information
        })
    }

    addNotes(note) {
        let noteTitle = note;
        let noteText = note;

        if (!noteTitle || !noteText) {
            throw new err("Need more information.")
        }

        const noteId = {
            noteTitle, noteText
            // , id: uuid()
        }
        
        return this.getNotes()
            .then((note) => [...note, noteId])
            .then((newNotes) => this.write(newNotes))
            .then (() => noteId)
    }

    deleteNotes(id) {
        return this.getNotes()
            .then((note) => note.filter((notes) => notes.id !== id))
            .then((filteredNote) => this.write(filteredNote))
    }
}

module.exports = new Store();
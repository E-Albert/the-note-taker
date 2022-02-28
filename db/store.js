const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');

//need a read file function
//need a write file function
//create class called store
//export store
/*inside store we want something that will read the notes, write notes,
 something that will get the notes, add notes to app and remove notes*/

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
            noteTitle, noteText, id: uuid()
        }
        
        return this.getNotes()
    }

    deleteNotes()
}

module.exports = new Store();
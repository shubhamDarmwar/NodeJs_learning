const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (title){
    return "This is the notes text."
}

const addNote = (title, body) => {
    
    const  allNotes = fetchAllNotes()
    const duplicates = allNotes.filter(function(note)  {
        return note.title === title
    })

    debugger
    if (duplicates.length === 0) {
        allNotes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(allNotes)
        console.log("Note added!")
    } else {
        console.log("Duplicate entry!")
    }
}

const removeNote = function (title) {
    const allNotes = fetchAllNotes()
    const filteredNotes = allNotes.filter( function(note) {
        return note.title !== title
    })
    saveNotes(filteredNotes)

    if(filteredNotes.length !== allNotes.length) {
        console.log(chalk.green("Removed note with title = " + title))   
    } else {
        console.log(chalk.red.inverse("Note not exist with title = " + title))   
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}



const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const fetchAllNotes = function () {
    try {
        const allNotes = JSON.parse(fs.readFileSync('notes.json').toString())
        return allNotes
    } catch(e){
        return []
    }
}


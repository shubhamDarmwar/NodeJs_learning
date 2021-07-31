// Import requred package 
const fs = require("fs")



// fs.writeFileSync('notes.txt', "This it new text.")
// fs.appendFileSync('notes.txt', "Appended text.")

// Make annother js script load
// require("./utils")


// Each script has its own scope. Varibales can only be accessed in side of the script. To make the variable accessible outside we need to explicitly export requred variables.

// Variable export
// const name = require("./utils")
// console.log(name)

//Func export 
const addFunc = require("./utils")
// console.log(addFunc(1,4))

const notes = require("./notes")
// console.log(notes.addNotes())

//npm init:
// Lists all the required npm packages
// Install package: npm install validator@13.6.0
// Install global package: npm install name -g

const validator = require("validator")
// console.log(validator.isEmail("shubha@.com"))

// Color printing

const chalk = require('chalk')
// console.log(chalk.blue("This is blue text"))



// Getting input to the script
// % node app.js add   
//% node app.js add --value=3
// console.log(process.argv)

const command = process.argv[2]
if (command === 'add') [
    // console.log("Add function choosed")
]


// Parsing the input values
const yargs = require('yargs')
const { demandOption } = require("yargs")
// console.log(yargs.argv)

// Customize yargs version
yargs.version('1.1.0')


//create commands add, remove, read list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true, // Make option compulsary
            type: 'string' // force variable type
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//node app.js addNote --title="Shubham"

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function() {
        console.log('Listing all the  notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    handler: function() {
        console.log('Reading all the  notes')
    }
})
yargs.parse()


//Debugger:
/*
1. write "degugger" at the any line
2. run the js file using inspect command 
eg. >> node inspect app.js add

3. Open chrome://inspect url in chrome
4. Add 127.0.0.1:9229 in configuration
5. Click on inspect
6. Under file system add the desired project folder
7. Use console to type variable name to check the values
 

*/
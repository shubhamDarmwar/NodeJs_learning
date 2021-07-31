const fs = require('fs')


const book = {
    title: "Very good book",
    author: "Shubham",
    price: 34
}

const jsonString = JSON.stringify(book)
fs.writeFileSync('1-json.json', jsonString)

const fileDataStream = fs.readFileSync('1-json.json')
const parsedBook = JSON.parse(fileDataStream.toString())
console.log(parsedBook.price)
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { time } = require('console')

//ref: https://expressjs.com/en/5x/api.html
const app = express()
const port = process.env.PORT || 3000
//Define paths for express config
const publicDirectoryFolder = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "/templates/views")
const partialsPath = path.join(__dirname, "/templates/partials")



//Following line makes use of all static files added in public folder (publicDirectoryFolder)
app.use(express.static(publicDirectoryFolder))

//OR
// app.get("", (req, res) => {
//     res.send("hello Express")
// })

// app.get("/about", (req, res) => {
//     res.send("This server is created using Express")
// })

// app.get("/help", (req, res) => {
//     res.send("Solve your problem yourself.")
// })

//OR

// HBS - used to render dynamic content with html docs
// Setup handlebar engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res)=> {
    res.render('index',{
        title:"My App",
        name:"Shubham"
    })
})

app.get('/about', (req, res)=> {
    res.render("about", {
        title:"About",
        name: "shubham"
    })
})

app.get('/help', (req, res)=> {
    res.render("help", {
        title: "Help",
        message: "We can't help you !!! \n Please find your own way.",
        name:"Shubham"
    })
})

app.get('/help/*', (req, res) =>{
    res.render('notFound', {
        title: "Not found",
        message: 'Document not found.',
        name: 'Shubhamsd'
    })
})

const fetchProductData = (callback) => {

    const request = require('postman-request');
    request("http://puzzle.mead.io/puzzle", function (error, response, body) {
        if (error) {
            console.log('error:', error); // Print the error if one occurred
        } else {
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            const data = JSON.parse(body)
            callback(data)
        }
    });
}


app.get('/products', (req, res) => {
    if (!req.query.search) { // This checks if query parameter named search is passed 
        return res.send({ // Since we can send multiple times return is used to terminate the fuction
            'error' : "please provide search term."
        }) 
    }
    res.send({
        "products" : [{"Product" : "Computer"}]
    })
    // fetchProductData((data) => {
    //     res.send(data)
    // })
    // fetch("http://puzzle.mead.io/puzzle").then((response) => {
    //     response.json().then((jsonResponse) => {
    //         response.send(jsonResponse)
    //     })
    // })
    
    
})

app.get('*', (req, res) =>{
    res.render('notFound', {
        title: "Not found",
        message: 'Page not found.',
        name: 'Shubham'
    })
})



app.listen(port, ()=> {
    console.log("Server started at port 3000")
})
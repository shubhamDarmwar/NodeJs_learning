// @@@ We have linked this app.js file in web-server/src/templates/views/index.hbs line 6

console.log("Client side java script file is loaded")

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((jsonResponse) => {
//         console.log(jsonResponse)
//     })
// })

// Use our server to get data from.
const getData = (productName, callBack) => {
    fetch("/products?search==d").then((response) => {
        response.json().then((jsonResponse) => {
            callBack(jsonResponse.products)
        })
    })
}

//Pick the components from html doc
const weatherForm = document.querySelector("form")
const inputField = document.querySelector("input")
const messageLine = document.querySelector("#message")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault() // This will prevent browser from reloading

    console.log(inputField.value)
    const inputText  = inputField.value
    getData("product", (products) => {
        console.log("Got response from api")
        messageLine.textContent =  `Product name ${inputField.value} : ` + `${products[0].Product}`
    })
})
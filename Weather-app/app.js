
//@@@@@@ Print in console after time out
// const { time } = require("console")

// console.log("Starting")
// setTimeout(()=> {
//     console.log("2 sec timer")
// }, 2000)

// setTimeout(()=> {
//     console.log("0 sec timer")
// }, 0)


// console.log("Stopping")

// @@@@@@@@@@@@@@@@@@@@@Callback function
// const getUser = (name, callback) => {
//     setTimeout(()=> {
//         callback({name: name, age: 39})
//     }, 2000)
// }

// getUser("shubham", (user) => {
//     // console.log(user)
// })

// @@@@@@@@@@@@@@@@@@ Create Http request 
// const fetchUserData = (callback) => {

//     const request = require('postman-request');
//     request("https://jsonplaceholder.typicode.com/todos/1", function (error, response, body) {
//         if (error) {
//             console.log('error:', error); // Print the error if one occurred
//         } else {
//             // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             // console.log('body:', body); // Print the HTML for the Google homepage.
//             const data = JSON.parse(body)
//             callback(data)
//         }
//     });
// }

// function testFuntion () {
//     let value = 10
//     fetchUserData((user) => {
//         console.log("value = ", value)
//         console.log(user)
//     })
// }

// testFuntion()

//@@@@@@@@@@@@@@@@ Destructuring object 
// This can be used while parameter passing. We can use left side directly into the function declaration

// const user = {
//     name: "Shubham",
//     age: "27"
// }

// const {name: userName, age, address = "No address"} = user
// console.log(userName)
// console.log(age)
// console.log(address)




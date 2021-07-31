const https = require('https')
const url = "https://jsonplaceholder.typicode.com/todos/1"
const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk
    })


    response.on('end', () => {
        console.log('Response ended = ', JSON.parse(data))
    })
    
    response.on('error', (error) => {
        console.log(error)
    })
})
request.end()

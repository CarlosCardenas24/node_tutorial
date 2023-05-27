const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hellow World')
})

server.listen(4000, () => {
    console.log('Server listening on port: 4000....')
})
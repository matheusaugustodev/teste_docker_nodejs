const http = require('http')

const porta = 3000
const hostname = '0.0.0.0'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Hello World'}))
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}/`)
})
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home ppage')
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        return
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
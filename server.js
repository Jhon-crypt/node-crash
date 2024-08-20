import http from 'http'

const PORT = 8000

const server = http.createServer((req, res) =>  {
    /*
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404
    */
    //Json content type
    /*
    res.writeHead(200, { 'content-Type': 'text/json' })
    res.end(JSON.stringify({ message: 'Success' }))
    */
   res.writeHead(200, { 'content-Type': 'text/html' })
   res.end('<h1>Welcome To NodeJs</h1>')
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
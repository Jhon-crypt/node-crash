import http from 'http'

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    /*
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404
    */

    //Json content type
    /*
    res.writeHead(200, { 'content-Type': 'text/json' })
    res.end(JSON.stringify({ message: 'Success' }))
    */

    //Manual Router
    if(req.url === "/") {

        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('<h1>Home Page</h1>');

    } else if(req.url === "/about") {

        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('<h1>About Page</h1>')

    } else if(req.url === "/contact") {

        res.writeHead(200, { 'content-Type': 'text/html' })
        res.end('<h1>Contact Page</h1>')

    }else{
        res.writeHead(404, { 'content-Type': 'text/html' })
        res.end('<h1>Not Found</h1>')
    }

    //console.log("This is the request URL:",req.url)
    //console.log("This is the request Method:",req.method)

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
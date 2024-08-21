import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

//Port
const PORT = process.env.PORT

//file path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const server = http.createServer(async(req, res) => {

    try {
        //Request method 
        if (req.method === 'GET') {
            let filePath;
            if (req.url === "/") {

                filePath = path.join(__dirname, 'public', 'index.html')

            } else if (req.url === "/about") {

                filePath = path.join(__dirname, 'public', 'about.html')

            }else {
                throw new Error("Not found")
            }

            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        } else {

            throw new Error("Method not allowed")

        }

    } catch (error) {
        throw new Error(error)

    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

/*
   res.setHeader('Content-Type', 'text/html');
   res.statusCode = 404
   */

//Json content type
/*
res.writeHead(200, { 'content-Type': 'text/json' })
res.end(JSON.stringify({ message: 'Success' }))
*/
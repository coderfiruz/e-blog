const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    fs.readFile('./index.html', (err, data) => {
        res.write(data)
        res.end()
    })
})

server.listen(4545, ()=>{
    console.log('Server is runnig on PORT 4545');
})
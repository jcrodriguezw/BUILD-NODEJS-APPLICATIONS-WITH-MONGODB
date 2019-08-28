const express = require('express')
const path = require('path')

const server = express()

server.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname,'index.html'))
})

server.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname,'about.html'))
})

server.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname,'contact.html'))
})

server.listen(4000, () => {
  console.log('server on port 4000')
})


// const http = require('http')
// const fs = require('fs')

// const homePage = fs.readFileSync('index.html')
// const about = fs.readFileSync('about.html')
// const contact = fs.readFileSync('contact.html')

// const server = http.createServer( (req, res) => {
//   // console.log(req.url)
//   if(req.url === '/about'){
//     return res.end(about)
//   } else if(req.url === '/contact'){
//     return res.end(contact)
//   } else if(req.url === '/'){
//     return res.end(homePage)
//   } else {
//     res.writeHead(404)
//     res.end('the page was not found')
//   }
// })

// server.listen(4000)
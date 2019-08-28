const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')

const server = http.createServer( (req, res) => {
  // console.log(req.url)
  if(req.url === '/about'){
    return res.end(about)
  } else if(req.url === '/contact'){
    return res.end(contact)
  } else if(req.url === '/'){
    return res.end(homePage)
  } else {
    res.writeHead(404)
    res.end('the page was not found')
  }
})

server.listen(4000)
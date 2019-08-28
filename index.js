const http = require('http')

const server = http.createServer( (req, res) => {
  // console.log(req.url)
  if(req.url === '/about'){
    return res.end('about page')
  } else if(req.url === '/contact'){
    return res.end('contac page')
  } else if(req.url === '/'){
    return res.end('home page')
  } else {
    res.writeHead(404)
    res.end('the page was not found')
  }
})

server.listen(4000)
const http = require('http')

const server = http.createServer( (req, res) => {
  console.log(req.url)
  res.end('HELLO NODE JS')
} )

server.listen(4000)
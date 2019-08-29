const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

const app = express()

app.connect('mongodb://localhost/node-js-blog')

app.use(express.static('public'))
app.use(expressEdge)

app.set('views',`${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('index')
})

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'pages/index.html'))
// })

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname,'pages/about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})

app.listen(5000, () => {
  console.log('server on port 5000')
})
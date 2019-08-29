const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

Post.findById("5d67fab7692b302634954621", (error,posts) => {
  console.log(error, posts)
})

// Post.find({
//   title:'My second blog post'
// }, (error,posts) => {
//   console.log(error, posts)
// })

// Post.find({}, (error,posts) => {
//   console.log(error, posts)
// })

// Post.create({
//   title:'My second blog post',
//   description: 'Blog',
//   content: 'the content'
// }, (error, post) =>{
//   console.log(error, post)
// })
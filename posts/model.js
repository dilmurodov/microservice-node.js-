const mongoose = require('mongoose')

const posts = mongoose.model('posts', {
    title: String,
})

module.exports = posts;
const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const comments = mongoose.model('comments', {
    content: String,
    postId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = comments;
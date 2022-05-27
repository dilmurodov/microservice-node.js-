const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const query = mongoose.model("query", {
    _id: Schema.Types.ObjectId,
    title: String,
    comments: []
})

module.exports = query;
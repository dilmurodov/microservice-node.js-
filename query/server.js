const app = require("./app")
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:123@cluster0.yfmpv.mongodb.net/blogs?retryWrites=true&w=majority", {

}).then(res => console.log("Query DB connected succesfully"))
    .catch(err => console.log("Error on connecting DB...", err))


app.listen(4002, '127.0.0.1', err => {
    err ? console.log(err) : console.log('Listening on', 4002);
})
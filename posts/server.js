const app = require('./app.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@cluster0.yfmpv.mongodb.net/blogs?retryWrites=true&w=majority',
    {

    }).then(res => console.log('DB successfully connected!'))
    .catch(err => console.log(err))

app.listen(4000, '127.0.0.1', (err) => {
    err ? console.log('Something error', err) : console.log('Listening on', 4000);
})
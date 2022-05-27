const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const commentRouter = require('./routes')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/posts', commentRouter);

app.post('/events', function(req, res) {
    console.log('Received event', req.body.type);

    res.send({})
})

module.exports = app;

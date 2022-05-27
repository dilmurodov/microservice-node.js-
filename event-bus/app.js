const express = require('express');
const cors = require('cors')
const axios = require("axios");


const app = express();

app.use(cors())
app.use(express.json())

app.post('/events', async function(req, res) {

    const event = req.body;

    await axios.post('http://127.0.0.1:4000/events', event);
    await axios.post('http://127.0.0.1:4001/events', event);
    await axios.post('http://127.0.0.1:4002/events', event);

    res.send({status: "Ok"});
})

module.exports = app;
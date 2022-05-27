const express = require('express');
const posts = require('./model');
const router = express.Router();
const axios = require('axios')
// http:127.0.0.1:4000/posts

router
    .route('')
    .post(async function (req, res) {
        try{
            const {title} = req.body;
            const post = await posts.create({title});
            const {id} = post;
            await axios.post('http://127.0.0.1:4005/events', {
                type: "PostCreated",
                data: {
                    title,
                    id
                },
            })

            res.status(201).json({
                "status": "success",
                "data": post
            })
        } catch(err) {
            res.status(500).json({
                "status": "Error",
                "data": err.message
            })
        }
    })
    .get(async function (req, res) {
        try{
            const post = await posts.find();
            res.status(200).json({
                "status": "success",
                "data": post
            })
        } catch(err) {
            res.status(500).json({
                "status": "Error",
                "data": err.message
            })
        }
    })



module.exports = router;
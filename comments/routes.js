const express = require('express')
const Comments = require('./model')
const axios = require('axios')
const router = express.Router()

/**
* posts/:id/comments
* */

router
    .route('/:id/comments')
    .post(async function(req, res) {
        try{
            const id = req.params.id;
            console.log(req.path)
            const {content} = req.body;
            const comment = await Comments.create({content, postId: id});
            await axios.post('http://127.0.0.1:4005/events', {
                type: "CommentCreated",
                data: {
                    "id": comment.id,
                    "content": comment.content,
                    "postId": comment.postId
                }
            })

            res.status(201).json({
                "status": "success",
                "data": comment
            })

        } catch(err) {
            res.status(500).json({
                "status": "Error",
                "data": err.message
            })
        }
    })
    .get(async function(req, res) {
        try{
            const _id = req.params.id;
            const comment = await Comments.find({postId: _id});

            res.status(200).json({
                "status": "success",
                "data": comment
            })

        } catch(err){
            res.status(500).json({
                status: "Error",
                data: err.message
            })
        }
    })

module.exports = router;

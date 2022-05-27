const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const query = require("./query");

const app = express();
app.use(cors());
app.use(express.json())
app.use(morgan("dev"))


app.post('/events', async function(req, res) {
    const {type, data} = req.body;
    if (type === 'PostCreated'){
        await query.create({_id: data.id, title: data.title})
    }else if (type === 'CommentCreated'){
        await query.findByIdAndUpdate(
            data.postId,
            {
                $push: {
                    comments: {
                        _id: data.id,
                        content: data.content
                    }
                }
            },
            {
                new: true, runValidators: true
            }
        )
    }
});

app.get('/posts', async function(req, res) {
    try{
        const posts = await query.find();

        res.status(200).json({
            "status": "success",
            "data": posts
        })

    }catch(err){
        res.status(500).json({
            "status": "Error",
            "data": err
        })
    }


});

module.exports = app;
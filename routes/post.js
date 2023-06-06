const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const Post = mongoose.model('posts');

router.get("/create/new", (req, res) => {
    res.render("create-post")
})

router.post("/create/new", async (req, res) => {
    try {
        const { title, description } = req.body;
        const post = await Post.create({
            title, description
        })
        res.send(post);
    }
    catch(error) {
        console.log("Error:",error);
        res.status(500).json({"message":"server error"});
    }
})

module.exports = router;
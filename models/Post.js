const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    date: {
        type: String,
        default: Date.now()
    }
});

const Post = mongoose.model('posts',PostSchema);
module.exports = Post
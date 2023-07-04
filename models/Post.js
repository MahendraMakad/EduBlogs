const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required:true,
    },
    userId: {
        type: String,
        required:true,
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

mongoose.model('posts',PostSchema);
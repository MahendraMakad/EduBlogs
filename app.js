const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db');
const Post = require('./models/Post');
const postRoute = require('./routes/post')
const app = express()

app.use(express.json());
app.use('/posts',postRoute);
app.set("view engine","ejs");
connectDB();

app.get('/',async (req,res)=>{
    try {
        const posts = await Post.find({});
        res.render('all-posts',{posts});
    }
    catch(error) {
        console.log("error");
        res.status(500).json({"message":"Server Error"});
    }
})

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});
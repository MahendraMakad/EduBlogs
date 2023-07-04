const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment')
const router = express.Router();
const Post = mongoose.model('posts');
const User = mongoose.model('users');
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { ensureCreator,ensureStudent,ensureNewUser,ensureSignUp} = require("../middleware/user");
const {fetchAllPosts} = require('../middleware/post');

router.get('/',ensureGuest,(req,res)=> {
    res.render('login');
})

router.get('/signup', ensureAuth, ensureNewUser, (req,res)=> {
    res.render('signup-profile');
});

router.get('/dashboard',ensureAuth,ensureSignUp,fetchAllPosts,(req,res)=> {
    res.render('dashboard');
})


router.patch('/user/update/role',ensureAuth,ensureNewUser,async (req,res)=> {
    try {
        const user = req.user;
        user.role = Number(req.body.role);
        await user.save();
        res.status(200).send({});
    }
    catch(error) {
        res.status(500).send("Something went wrong");
    }
})


module.exports = router
const express = require('express');
const router = express.Router();

const {ensureAuth} = require('../middleware/auth');
const {ensureSignUp} = require('../middleware/user');

router.get('/profile/settings',ensureAuth,ensureSignUp,(req,res)=> {
    res.render('profile-settings');
});

router.patch('/profile/settings',ensureAuth,ensureSignUp,async (req,res)=>{
    try {
        const profileData = req.body;
        const user = req.user;
        for(const key in profileData) {
            user[key] = profileData[key];
        }
        user.save();
        res.status(200).send(user);
    }
    catch(error) {
        res.status(500).send("Something went wrong");
    }
})

module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const verifyToken = require('../../middleware/authorization');
router.post('/login', (req, res) => {

    //TODO: fitch and confirm user from db
    // Mock/retrieved user
    const user = {
        id: 1,
        username: 'leen',
        email: 'yaman@gmail.com'
    }

    jwt.sign({ user }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        });
    });
});

// example protected route
// verifyToken is like an authorization middleware
router.post('/logout', verifyToken, (req, res) => {

    // verify token is valid
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403); // if its expired or not valid
        } else {
            res.json({
                message: 'logged out',
                authData
            });
        }
    });
});



module.exports = router; //export this module so we can use it in server.js

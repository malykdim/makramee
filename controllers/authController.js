const jwt = require('jsonwebtoken');
const authController = require('express').Router();

const jwtSecret = '2342342i34khjhghfkhgv3';

// login, register, logout

authController.get('/obtain', (req, res) => {
    const payload = {
        _id: '4578634985634895cce',
        username: 'peter',
        roles: ['user']
    }
    const token = jwt.sign(payload, jwtSecret);
    res.cookie('jwt', token);
    res.send('Here is your token');
});

authController.get('/validate', (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const data = jwt.verify(token, jwtSecret);
            console.log(data);
            res.json(data);
            // res.send('Token validated');            
        } catch (error) {
            res.cookie('jwt', '', {maxAge: 0});
            res.redirect('/login');
        }
    } else {
        res.send('Missing token');        
    }
});

module.exports = authController;
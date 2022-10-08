const authController = require('express').Router();
const { login } = require('../services/authService');


authController.get('/signin', (req, res) => {
    res.render('signIn', {
        title: 'Sign in'
    });
});

authController.get('/signup', (req, res) => {
    res.render('signUp', {
        title: 'Sign up'
    });
});

authController.post('/signin', async (req, res) => {
    const result = await login(req.body.username, req.body.password);
    const token = req.signJwt(result);
    res.cookie('jwt', token);
    res.redirect('/catalog');
});

module.exports = authController;
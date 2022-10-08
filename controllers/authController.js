const authController = require('express').Router();
const { login, register } = require('../services/authService');

/* /signin */
authController.get('/signin', (req, res) => {
    res.render('signIn', {
        title: 'Sign in'
    });
});

authController.post('/signin', async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        attachToken(req, res, result);
        res.redirect('/catalog');
    } catch (error) {
        res.render('signIn', {
            title: 'Sign in',
            error: error.message.split('\n')
        });
    }
});


/* /signup */
authController.get('/signup', (req, res) => {
    res.render('signUp', {
        title: 'Sign up'
    });
});

authController.post('/signup', async (req, res) => {
    try {
        if (req.body.username.trim() == '' || req.body.password.trim() == '') {
            throw new Error('All fields are required!');
        }
        if (req.body.password.trim() != req.body.repass.trim()) {
            throw new Error('Passwords don\'t match!');
        }
        const result = await register(req.body.username.trim(), req.body.password.trim());    
        attachToken(req, res, result);    
        res.redirect('/catalog');        
    } catch (err) {
        res.render('signUp', {
            title: 'Sign up',
            error: err.message.split('\n')
        });
    }
});

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}


module.exports = authController;
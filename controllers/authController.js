const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { login, register } = require('../services/authService');
const { parseError } = require('../utils/parser');


/* /signin */
authController.get('/signin', (req, res) => {
    res.render('signIn', {
        title: 'Sign in'
    });
});

authController.post(
    '/signin', 
    body(['username', 'password']).trim(),
    async (req, res) => {
        try {
            const result = await login(req.body.username, req.body.password);
            attachToken(req, res, result);
            res.redirect('/catalog');
        } catch (error) {
            // const fields = Object.fromEntries(error.map(e => [e.param, e.param]));
            
            res.render('signIn', {
                title: 'Sign in',
                body: {
                    username: req.body.username
                },
                // fields,
                error: parseError(error)
            });
        }
}
);


/* /signup */
authController.get('/signup', (req, res) => {
    res.render('signUp', {
        title: 'Sign up'
    });
});

authController.post(
    '/signup', 
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required').bail()
        .isAlphanumeric().withMessage('Username may contain only english letters and numbers'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    body('repass')
        .trim()
        .custom(async (value, { req }) => {
            if (value != req.body.password) {
                throw new Error(`Passwords don't match`);
            }
        }),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            
            if (errors.length > 0) {
                throw errors;
            }
            
            const result = await register(req.body.username, req.body.password);    
            attachToken(req, res, result);    
            res.redirect('/catalog');        
        } catch (error) {
            console.log(error);
            const fields = Object.fromEntries(error.map(e => [e.param, e.param]));
            res.render('signUp', {
                title: 'Sign up',
                body: {
                    username: req.body.username
                },
                fields,
                error
            });
        }
    }
);

authController.get('/signout', (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
});

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}

module.exports = authController;
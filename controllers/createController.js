const { create } = require('../services/itemService');
const { parseError } = require('../utils/parser');

// const { User } = require('../models/User');
// const { createCategory } = require('../services/categoryService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Makramee - Create'
    });
});

router.post('/', async (req, res) => {
    try {        
        const result = await create(req.body, req.user._id);
        // const authorId = req.user._id;
        // const author = await User.findById({ authorId }) ;
        // console.log(author);
        
        res.redirect('/catalog/' + result._id);
    } catch (error) {
        res.render('create', {
            title: 'Request Error',
            body: req.body,
            error: parseError(error)
        });
    }
});

module.exports = router;
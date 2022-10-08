const { create } = require('../services/itemService');
const { createCategory } = require('../services/categoryService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Makramee - Create'
    });
});

router.post('/', async (req, res) => {
    try {        
        const result = await create(req.body, req.user._id);
        res.redirect('/catalog/' + result._id);
    } catch (error) {
        res.render('create', {
            title: 'Request Error',
            error: error.message.split('\n')
        });
    }
});

module.exports = router;
const { create } = require('../services/itemService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Makramee - Create'
    });
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        console.log(result);
        res.redirect('/catalog/' + result._id);
    } catch (err) {
        res.render('create', {
            title: 'Request Error',
            error: err.message.split('\n')
        });
    }
});

module.exports = router;
const { create } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Makramee - Create'
    });
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.redirect('/catalog/' + result.id);
    } catch (err) {
        res.render('create', {
            title: 'Request Error'
        });
        console.log(err.message);        
    }
});

module.exports = router;
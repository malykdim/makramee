const router = require('express').Router();

const { getAll } = require('../services/dataService');


router.get('/', (req, res) => {
    const items = getAll();
    res.render('catalog', {
        title: 'Makramee - Catalogue',
        items
    });
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: 'Makramee - Details'
    });
});

module.exports = router;
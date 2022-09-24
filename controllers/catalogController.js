const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('catalog', {
        title: 'Makramee - Catalogue'
    });
});

router.get('/:id', (req, res) => {
    res.render('details', {
        title: 'Makramee - Details'
    });
});

module.exports = router;
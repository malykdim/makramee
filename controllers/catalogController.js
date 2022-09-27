const router = require('express').Router();

const { getAll, getById } = require('../services/dataService');


router.get('/', (req, res) => {
    const search = req.query.search || '';
    const items = getAll(search);
    res.render('catalog', {
        title: 'Makramee - Catalogue',
        items,
        search
    });
});

router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const item = getById(itemId);
    if (item) {
        res.render('details', {
            title: 'Makramee - Details',
            item
        });        
    } else {
        res.render('404', {
            title: 'Not found',
            itemId
        });        

    }
});

module.exports = router;
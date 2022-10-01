const router = require('express').Router();

const { getAll, getById } = require('../services/itemService');


router.get('/', async (req, res) => {
    const search = req.query.search || '';
    const items = await getAll(search);
    res.render('catalog', {
        title: 'Makramee - Catalogue',
        items,
        search
    });
});

router.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    const item = await getById(itemId);
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
const router = require('express').Router();

const { getAll, getById } = require('../services/itemService');


router.get('/', async (req, res) => {
    // const priceFrom = Number(req.query.search) || 1;
    // const priceTo = Number(req.query.search) || 1000;
    // const author = req.query.search || '';
    // const category = req.query.search || '';
    const search = req.query.search || '';
    const items = await getAll(search);
    // const items = getAll(search, priceFrom, priceTo, author, category);
    res.render('catalog', {
        title: 'Makramee - Catalogue',
        items,
        // priceFrom, priceTo, author, category
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
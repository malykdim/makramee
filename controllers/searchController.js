const router = require('express').Router();

// const { getAll, getById } = require('../services/itemService');


router.get('/', async (req, res) => {
    // const items = await getAll(search);
    // const search = req.query.search || '';
    // const author = req.query.search || '';
    // const category = req.query.search || '';
    // const priceFrom = Number(req.query.search) || 1;
    // const priceTo = Number(req.query.search) || 1000;
    // const items = getAll(search, priceFrom, priceTo, author, category);
    res.render('search');
});

module.exports = router;
const { getAll, getById } = require('../services/itemService');
const router = require('express').Router();



router.get('/', async (req, res) => {
    const user = req.user;
    if (user) {
        console.log(`Known user: ${user.username}`);        
    } else {
        console.log(`guest`);           
    }
    
    // by name
    const search = req.query.search || '';
    // todo: by author
    // todo: by category
    // todo: by price - from/to
    
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
    
    if (req.user && req.user._id == item.author) {
        item.isAuthor = true;        
    }
    
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
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Makramee - Create'
    });
});


module.exports = router;
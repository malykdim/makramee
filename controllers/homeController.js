const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Makramee'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Makramee - About'
    });
});

module.exports = router;
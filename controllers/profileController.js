const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('profile', {
        title: 'Makramee - Profile'
    });
});

module.exports = router;
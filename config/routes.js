const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const searchController = require('../controllers/searchController');
const categoryController = require('../controllers/categoryController');
const createController = require('../controllers/createController');
const profileController = require('../controllers/profileController');

const defaultController = require('../controllers/defaultController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/catalog', catalogController);
    app.use('/search', searchController);
    
    app.use('/create', createController);
    app.use('/category', categoryController);
    
    app.use('/profile', profileController);

    app.all('*', defaultController);
};
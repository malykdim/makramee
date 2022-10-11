const { hasUser } = require('../middlewares/guards');
const authController = require('../controllers/authController');
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
    app.use('/auth', authController);
    
    app.use('/create', hasUser(), createController);
    app.use('/category', hasUser(), categoryController);    
    app.use('/profile', hasUser(), profileController);

    app.all('*', defaultController);
};
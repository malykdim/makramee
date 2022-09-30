const homeController = require('../controllers/homeController');
const catalogController = require('../controllers/catalogController');
const categoryController = require('../controllers/categoryController');
const createController = require('../controllers/createController');
const defaultController = require('../controllers/defaultController');

module.exports = (app) => {
    app.use(homeController);
    app.use('/catalog', catalogController);
    app.use('/create', createController);
    app.use('/category', categoryController);
    app.use('/profile', defaultController);

    app.all('*', defaultController);
};
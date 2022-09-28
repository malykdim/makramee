const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const defaultTitle = require('./middlewares/defaultTitle');
const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const defaultController = require('./controllers/defaultController');


const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.use(defaultTitle('Makramee'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);

app.all('*', defaultController);


app.listen(3000, () => console.log('Makramee listening at http://localhost:3000'));
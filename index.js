const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const homeController = require('./controllers/homeController');
const defaultController = require('./controllers/defaultController');


const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.use(homeController);

// other controllers

app.all('*', defaultController);


app.listen(3000, () => console.log('Makramee listening on port 3000'));
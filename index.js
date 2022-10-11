require('dotenv').config();
const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

async function start() {
    const app = express();
    
    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    
    app.listen(process.env.PORT, () => console.log(`Makramee listening at ${process.env.HOST}:${process.env.PORT}`));
}
    
start();
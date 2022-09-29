const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

async function start() {
    const app = express();
    
    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);
    
    app.listen(3000, () => console.log('Makramee listening at http://localhost:3000'));
}
    
start();
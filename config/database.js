require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/Item');

const connectionString = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/makramee';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });        
        console.log('Database connected');
        
    } catch (err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);
    }   
}
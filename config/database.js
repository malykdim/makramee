const mongoose = require('mongoose');
const Item = require('../models/Item');

const connectionString = 'mongodb://localhost:27017/makramee';


module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
        console.log('Database connected');
        
        const data = await Item.find({});
        console.log(data);
        
    } catch (err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);
    }   
}
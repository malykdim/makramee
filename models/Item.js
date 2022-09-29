const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 5 },
    category: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: false }
});

const Item = model('Item', itemSchema);

module.exports = Item;
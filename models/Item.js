const { Schema, model, Types } = require('mongoose');

const itemSchema = new Schema({
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: [5, 'Price cannot be less than 5'] },
    category: { type: [Types.ObjectId], default: [], ref: 'Category'},
    author: { type: String, required: true },
    description: { type: String, required: false }
});

itemSchema.methods.showCategories = function() {
    return `${this.categories} should be an array of strings`;
};

const Item = model('Item', itemSchema);

module.exports = Item;
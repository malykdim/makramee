const { Schema, model, Types: { ObjectId } } = require('mongoose');

const categorySchema = new Schema({
    labels: { type: [String], required: true },
    items: { type: [ObjectId], default: [], ref: 'Item'}
});

const Category = model('Category', categorySchema);

module.exports = Category; 
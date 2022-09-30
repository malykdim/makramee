const { Schema, model, Types: { ObjectId } } = require('mongoose');

const categorySchema = new Schema({
    label: { type: String, required: true },
    iconURL: { type: String },
    items: { type: [ObjectId], default: [], ref: 'Item'}
});

const Category = model('Category', categorySchema);

module.exports = Category;
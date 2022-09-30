const Category = require('../models/Category');

async function getAllCategories() {
    return Category.find({});
}

async function createCategory(label, iconURL) {
    return Category.create({
        label,
        iconURL
    });
}

module.exports = {
    getAllCategories,
    createCategory
};
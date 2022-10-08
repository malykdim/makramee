const Category = require('../models/Category');
const Item = require('../models/Item');

async function getAllCategories() {
    return Category.find({}).lean();
}

async function createCategory(label) {
    return Category.create({
        label
    });
}

async function addCategory(itemId, categoryIds) {
    console.log(itemId, categoryIds, 'addCategory');
}

module.exports = {
    getAllCategories,
    createCategory,
    addCategory
};
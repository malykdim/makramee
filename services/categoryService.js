const Category = require('../models/Category');

async function getAllCategories() {
    return Category.find({});
}

async function createCategory(label) {
    return Category.create({
        label
    });
}



module.exports = {
    getAllCategories,
    createCategory
};
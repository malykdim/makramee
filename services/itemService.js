const Item = require('../models/Item');

function getAll() {
    return Item.find({}).lean();
}

// function filterByAuthor(author) {
//     return Item.find({ author: author }).lean();
// }


function getById(id) {
    return Item.findById(id).lean();
}

async function create(itemData, authorId) {
    const item = {
        imgURL: itemData.imgURL,
        name: itemData.name,
        price: Number(itemData.price),
        category: itemData.category,
        author: authorId,
        description: itemData.description
    };
    
    const missing = Object.entries(item).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }
    
    const result = await Item.create(item);
    console.log(Item.showAuthor());
    // console.log(result[0].showCategories());
    
    return result;
}

module.exports = {
    getAll,
    getById,
    create
}
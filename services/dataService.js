const fs = require('fs');

const fileName = './models/data.json';
const data = JSON.parse(fs.readFileSync(fileName));

function getAll() {
    return data;
}

function getById(id) {
    return data.find(item => item.id == id);
}

async function create(itemData) {
    const item = {
        id: getId(),
        imgURL: itemData.imgURL,
        name: itemData.name,
        price: Number(itemData.price),
        category: itemData.category,
        author: itemData.author,
        description: itemData.description
    }
    
    data.push(item);
    await persist();
    return item;
}


async function persist() {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data), (err) => {
            if (err == null) {
                res();
            } else {
                rej(err);
            }
        });
    });
}

function getId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16).slice(-6));
}

module.exports = {
    getAll,
    getById,
    create
}
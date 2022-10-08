const { Schema, model, Types, set } = require('mongoose');

const itemSchema = new Schema({
    imgURL: { type: String, required: true },
    name: { type: String, minLength: 3 },
    price: { type: Number, required: true, min: [5, 'Price cannot be less than 5'] },
    author: { type: String, required: true },
    description: { type: String, required: false },
    category: 
        { 
            type: [Types.ObjectId], 
            ref: 'Category',
            default: []
        }
    ,
    materials: [
        { 
            type: String, 
            enum: {
                values: ['cotton', 'linen', 'hemp', 'jute', 'leather', 'yarn', 'gemstones', 'wood', 'other'], 
                message: props => `${Object.keys(props)} is not supported`
            } 
        }
    ]
});

itemSchema.path('description')
    .validate(function () {
        return this.description.length >= 1 && this.description.length <= 100;        
    }, 'Description must be up to 150 characters long');

itemSchema.methods.showCategories = function() {
    return `${this.category} should be an array of strings`; 
};
// USE: After awaiting the data
// console.log(data[0].showCategories()); // function

itemSchema.virtual('heading')
    .get(function () {
    return `${this.name} - ${this.price}`; 
    })
    .set(function (value) {
        const [name, price] = value.split(' - ');
        this.name = name;
        this.price = price;
    });
// console.log(data[0].heading); // calculated property
// data[0].heading = 'newName - newPrice'
// await data[0].save();

const Item = model('Item', itemSchema);

module.exports = Item;
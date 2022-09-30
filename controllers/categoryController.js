const { createCategory, getAllCategories } = require('../services/categoryService');

const categoryController = require('express').Router();

categoryController.get('/create', (req, res) => {
    // show creation form
    res.render('category', {
        // context
        title: 'Create New Category'
    });

});

categoryController.post('/create', async (req, res) => {
    try {
        await createCategory(req.body.label, req.body.iconURL);
        res.redirect('/create');
    } catch (err) {
        // TODO render errors
        res.render('/category/create', {
            title: 'Create New Category'
        });
    }
});

categoryController.get('/create/addCategory', async (req, res) => {
    const categories = await getAllCategories();
    
    res.redirect('category', {
        title: 'Add Category',
        item,
        categories
    });

});


module.exports = categoryController;
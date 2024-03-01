const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controller/category.controller');
const { asyncHandler } = require('../util/errorHandling');
const categoryValidation = require('../middleware/validator/category.validator')
const { validation } = require('../middleware/validator/validation');



categoryRouter.route('/')
    .get(asyncHandler(categoryController.getAllCategories))
    .post(
        validation(categoryValidation.validateAddCategory),
        asyncHandler(categoryController.addNewCategory)
    )

categoryRouter.route('/edit/:categoryId')
    .post(
        validation(categoryValidation.validateUpdateCategory),
        asyncHandler(categoryController.updateCategory))

categoryRouter.route('/:categoryId').get(asyncHandler(categoryController.getCategoryById))



categoryRouter.route('/delete/:categoryId').get(asyncHandler(categoryController.deleteCategory))


module.exports = categoryRouter
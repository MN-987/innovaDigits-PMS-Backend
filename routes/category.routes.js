const express =require('express');
const categoryRouter =express.Router();
const categoryController =require('../controller/category.controller');
const {asyncHandler} =require('../util/errorHandling');
const categoryValidation =require('../middleware/validator/category.validator')
const { validation } = require('../middleware/validator/validation');



categoryRouter.route('/')
.get(asyncHandler(categoryController.getAllCategories))
.post(
    validation(categoryValidation.validateAddCategory),
    asyncHandler(categoryController.addNewCategory)
)


categoryRouter.route('/:categoryId')
.patch(  validation(categoryValidation.validateUpdateCategory),
    asyncHandler(categoryController.updateCategory))
.get(asyncHandler(categoryController.getCategoryById))    
.delete(asyncHandler(categoryController.deleteCategory))


module.exports=categoryRouter
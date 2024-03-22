
const Category =require('../data/category.model')
const { ErrorClass } = require("../util/errorClass");


module.exports.getAllCategoriesService =async()=>{
    return  await Category.find({});
}

module.exports.getCategoryByIdService =async(categoryId)=>{
    const category =Category.findById(categoryId);
    if(!category){
        return next(new ErrorClass('this category is not found',404))
     }
    return category;
}

module.exports.addNewCategoryService=async(categoryData)=>{
    const newCategory =new Category(categoryData);
    await newCategory.save();
    return newCategory;
}

module.exports.updateCategoryService =async(categoryId,updatedData)=>{
    const updatedCategory =await Category.updateOne({_id:categoryId},{$set:{...updatedData}});
    return updatedCategory;
}


module.exports.deleteCategoryService =async(categoryId)=>{
  return await Category.deleteOne({_id:categoryId});
}

module.exports.getCategoryByName=async(categoryName)=>{

    const category =await Category.findOne({categoryName})
    return category;
}

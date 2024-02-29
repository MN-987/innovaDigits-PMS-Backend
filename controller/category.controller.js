const categoryService =require('../service/category.service.js')
const ErrorClass =require('../util/errorClass.js')


module.exports.getAllCategories =async(req,res)=>{
   const categories=await categoryService.getAllCategoriesService()
   res.status(200).json({status:"success",data:{categories}})

}


module.exports.getCategoryById=async(req,res,next)=>{
   const categoryId =req.params.categoryId 
  const category= await categoryService.getCategoryByIdService(categoryId)
  if (!category) {
    return next(new ErrorClass('This category is not found', 404));
  }
    res.status(200).json({status:"success",data:{category}})

}



module.exports.addNewCategory=async(req,res,next)=>{

  const existingCategory = await categoryService.getCategoryByName(req.body.categoryName);
    if (existingCategory) {
        return next(new ErrorClass('category name already exists.',400))
    }
   const category =await categoryService.addNewCategoryService(req.body)
   res.status(201).json({status:"success",data:{category}})

}


module.exports.updateCategory=async(req,res,next)=>{
        const categoryId = req.params.categoryId;
        let updatedData = req.body
       const category= await categoryService.updateCategoryService(categoryId,updatedData)
       if (category.modifiedCount === 0) {
        return next(new ErrorClass('This category is not found.', 404));
    }
       res.status(200).json({status:"success",data:{category}})
        
}


module.exports.deleteCategory =async(req,res,next)=>{
  const categoryId = req.params.categoryId;
const deletedCategory =await categoryService.deleteCategoryService(categoryId)
if (deletedCategory.deletedCount === 0) {
  return next(new ErrorClass('This category is not found', 404));
}
res.status(200).json({ status: "success", data:null })

}
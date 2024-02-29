const categoryService =require('../service/category.service.js')



module.exports.getAllCategories =async(req,res)=>{
  await categoryService.getAllCategoriesService().then((categories)=>{
   res.status(200).json({status:"success",data:{categories}})
  })
}


module.exports.getCategoryById=async(req,res,next)=>{
   const categoryId =req.params.categoryId 
   await categoryService.getCategoryByIdService(categoryId).then((category)=>{
    res.status(200).json({status:"success",data:{category}})
})
}



module.exports.addNewCategory=async(req,res,next)=>{

await categoryService.addNewCategoryService(req.body).then((category)=>{
  res.status(201).json({status:"success",data:{category}})
})
}


module.exports.updateCategory=async(req,res,next)=>{
        const categoryId = req.params.categoryId;
        let updatedData = req.body
        await categoryService.updateCategoryService(categoryId,updatedData).then((category)=>{
          res.status(200).json({status:"success",data:{category}})
        })

}


module.exports.deleteCategory =async(req,res,next)=>{
  const categoryId = req.params.categoryId;
await categoryService.deleteCategoryService(categoryId).then(()=>{
  res.status(200).json({ status: "success", data:null })
})
}
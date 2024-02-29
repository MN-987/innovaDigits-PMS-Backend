const mongoose =require('mongoose')
const Schema = mongoose.Schema;


const categorySchema =new mongoose.Schema({

categoryName:{
    type:String,
    required:true
}
,
competenciesId:[{
    type: Schema.Types.ObjectId,  
    required:true,
    ref: 'Competency' 
  }]
    
})

module.exports = mongoose.model('Category',categorySchema)
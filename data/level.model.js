const mongoose =require('mongoose')

const levelSchema = new mongoose.Schema({
levelName:{
    type:String,
    require:true
 }
// ,levelDescription:{
//     type:String,
//     require:true,
// }
})

module.exports = mongoose.model('Level', levelSchema);

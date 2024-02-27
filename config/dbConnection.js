const mongoose =require("mongoose");

const connectDB = async () => {
         return await mongoose.connect(process.env.DB_URL).then(res => {
            console.log(`DB Connected ....`);
         }).catch (err => {
    console.log(`Fail to connectDB ...${err}`);
   }) 
}

module.exports=connectDB;
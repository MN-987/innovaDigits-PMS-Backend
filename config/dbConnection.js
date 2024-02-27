
const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.DB_URL);
        console.log(`DB Connected ....`);
        return res;
    } catch (err) {
        console.log(`Fail to connectDB ...${err}`);
        throw err; // You may want to handle this error further up the call stack
    }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected(with compass)");
    }
    catch (err){
        console.error("Error connecting to mongoDB",err);
        process.exit(1);
    }
};

// const connectDB = async () => {
//   mongoose.connection.on('connected', () => {
//     console.log("DB Connected (with atlas)");
//   })
//   await mongoose.connect(`${process.env.MONGODB_URI}/Expense-Tracker`)
// }

module.exports = connectDB;
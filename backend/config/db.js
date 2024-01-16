const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo connecté");
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

module.exports = connectDb;
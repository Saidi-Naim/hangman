const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI).then(() => console.log('server connected'));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;

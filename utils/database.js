// utils/database.js

import mongoose from 'mongoose';

// const MONGODB_URI = 'mongodb+srv://Souvik:Zstar246@cluster0.pqchhcz.mongodb.net/user_login';
let isConnected=false
async function connectDB() {
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log("MongoDb is Already connected")
    }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected=true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

export default connectDB;

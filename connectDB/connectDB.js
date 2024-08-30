import mongoose from "mongoose";

const connectDB = async()=>{
 const connect = await mongoose.connect('mongodb://localhost:27017/todoapp') 
 if (connect){
  console.log('connection succesfull..');
 }else{
  console.log('connection failed..');
 }
}


export default connectDB;
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  task: String,
  // Add other fields as needed
});

const ToDo = mongoose.model('ToDo', taskSchema);

export default ToDo;
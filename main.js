import express from 'express';
// import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import todoRouter from './routes/todo.js';
import connectDB from './connectDB/connectDB.js';

const app = express();
const port = process.env.PORT || 3000; 

// Connect to MongoDB
// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/todo', todoRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

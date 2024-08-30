import express from 'express';
import ToDo from '../models/taskSchema.js';

const router = express.Router();

// Route to get all ToDos
router.get('/', async (req, res) => {
  try {
    const todos = await ToDo.find(); // Fetch todos from the database
    res.render('index', { todos }); // Pass todos to the EJS template
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send('Server Error');
  }
});

// Route to add a new ToDo
router.post('/', async (req, res) => {
  try {
    const { task } = req.body; // Expecting 'task' in the request body

    if (!task) {
      return res.status(400).send('Task is required');
    }

    const newToDo = new ToDo({
      task,
    });

    await newToDo.save();
    res.redirect('/'); // Redirect to the home page to see the updated list
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).send('Server Error');
  }
});

export default router;

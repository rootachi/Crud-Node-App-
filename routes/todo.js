import express from 'express';
import ToDo from '../models/taskSchema.js'; // Adjust the path as needed

const router = express.Router();

router.post('/add/ToDo', async (req, res) => {
    try {
      console.log('Request body:', req.body);
  
      const { task } = req.body;
  
      if (!task) {
        return res.status(400).send('Task is required');
      }
  
      const newToDo = new ToDo({
        task,
      });
  
      await newToDo.save();
  
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });


export default router;
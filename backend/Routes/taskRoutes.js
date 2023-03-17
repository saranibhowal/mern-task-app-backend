const express = require('express');
const {createTask, getTasks, getTask, deleteTask, updateTask} = require('../controllers/taskController');

const router = express.Router();

//Alternative routes code to minimize the codes.
// router.route('/').post(createTask).get(getTasks);
// router.route('/:id').get(getTask).delete(deleteTask).put(updateTask);

//Post/Create a task
router.post('/', createTask);

//Get/Read tasks
router.get('/', getTasks);

//Get/Read a task
router.get('/:id', getTask);

//Delete a task
router.delete('/:id', deleteTask);

//Update a task
router.put('/:id', updateTask);

module.exports = router
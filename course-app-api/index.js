import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all courses
app.get('/api/v1/courses', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'courses retrieved successfully',
    courses: db
  })
});

app.post('/api/v1/courses', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const todo = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 db.push(todo);
 return res.status(201).send({
   success: 'true',
   message: 'todo added successfully',
   todo
 })
});

//Get a Single Course

app.get('/api/v1/courses/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((course) => {
    if (todo.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'course retrieved successfully',
        course,
      });
    } 
});
 return res.status(404).send({
   success: 'false',
   message: 'todo does not exist',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
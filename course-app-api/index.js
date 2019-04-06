import express from 'express';
import db from './database';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql'
import beSchema from './beSchema'

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Enabling cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get all courses
app.get('/api/v1/courses', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'courses retrieved successfully',
    courses: db.getCourses()
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

})

//Get a Single Course

app.get('/api/v1/courses/:id', (req, res) => {
  const id = req.params.id;
      return res.status(200).send({
        success: 'true',
        message: 'course retrieved successfully',
        course: db.getCourse(id),
      });
});

app.use('/graphql', graphqlHTTP({
  schema: beSchema,
  rootValue: db,
  graphiql: true,
}));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
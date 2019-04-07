import { buildSchema } from 'graphql'

import {CourseSchema} from './objects/course/model'
import {TaskSchema} from './objects/course/task'
import {PersonSchema} from './objects/person/model'

// Construct a schema, using GraphQL schema language
var beSchema = buildSchema(`

  type NodeType {
    path: String
  } 
  
`
+
PersonSchema
+
TaskSchema
+ 
`
  input CourseInput {
    id: String,
    title: String
  }

  input TaskInput {
    courseId: String,
    taskId: Int
  }

`
+
CourseSchema
+ 
`

  type Query {
    hello: String,
    course(input:CourseInput): CourseType
    courses(search:String): [CourseType]
    task(input:TaskInput): TaskType
  }
`);

export default beSchema

/*

Course Data Design:

Course

  DataProperties: [
    id
    title
  ]


  ObjectProperties: [
    editors: [people]
    timeToComplete: {hours, precision}
    prerequisites: [prereq_other_courses]
    postCourse: [other_advanced_or_equal_courses]

  ]





*/
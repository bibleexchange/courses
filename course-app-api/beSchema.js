import { buildSchema } from 'graphql'
// Construct a schema, using GraphQL schema language
var beSchema = buildSchema(`

  type LessonType {
    id: Int,
    title: String,
    content: String
    pathToFile:String
    type: String
    link: String
    course_id: String
  }

  type SectionType {
    id: String
    lessons: [LessonType]
  }

  input CourseInput {
    id: Int,
    title: String
  }

  type CourseType {
    id: String,
    title: String,
    sections: [SectionType]
  }

  type Query {
    hello: String,
    course(input:CourseInput): CourseType
    courses(search:String): [CourseType]
    lesson(id:Int): LessonType
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
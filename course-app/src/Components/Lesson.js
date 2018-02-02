import React, { Component } from 'react';
import { Link } from 'react-router-dom'
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();

class Lesson extends Component {

	constructor(props){
    super(props)

    let course = this.props.data.courses.find(this.findCourse, this)
    let section = course.sections[this.props.match.params.sectionId]

		this.state = {
      course: course,
			lesson: section.lessons.find(this.findLesson, this)
		}

	}

  render() {

    let course = this.state.course
    let lesson = this.state.lesson

    let content = lesson.content

    if(lesson.type === ".md"){

      content = md.render(content);
      console.log(content)
    }

    return (
      <div>
        <h1>{course.title}</h1>
			
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </div>
    );
  }

  findCourse(course){
    return course.id === this.props.match.params.courseId
  }

  findLesson(lesson){
    let lessonId = parseInt(this.props.match.params.lessonId, 10)
    console.log(lesson, lessonId)
    return lesson.uuid === lessonId
  }

}

export default Lesson
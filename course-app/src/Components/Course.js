import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Section extends Component {
  render() {
   
    let course = this.props.course
    let sectionIndex = this.props.index
console.log(course)
    return (
      <div>
        <hr />
        <p>{this.props.id} ({this.props.lessons.length} lessons)</p>
        <ol>
        {this.props.lessons.map(function(les, key){
          return <li key={key}><Link to={"/course/"+course.id+"/"+sectionIndex+"/"+les.uuid}>{les.fileName}</Link></li>
        })}
        </ol>
      </div>
    );
  }

}

class Course extends Component {
  render() {
  	console.log()

    let course = this.props.data.courses.find(this.findCourse, this)

    return (
      <div>
        <h1>{course.title}</h1>

        {course.sections.map(function(sec, key){
          return <h2 key={key}><Section {...sec} course={course} index={key}/></h2>
        })}

      </div>
    );
  }

  findCourse(course){
    return course.id === this.props.match.params.courseId
  }

}

export default Course
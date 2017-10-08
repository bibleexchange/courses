import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Section extends Component {
  render() {
   

    return (
      <div>
        <hr />
        <p>{this.props.id} ({this.props.lessons.length} lessons)</p>

        {this.props.lessons.map(function(les, key){
          return <h2 key={key}>{les.id}</h2>
        })}

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
          return <h2 key={key}><Section {...sec}/></h2>
        })}

      </div>
    );
  }

  findCourse(course){
    return course.id === this.props.match.params.courseId
  }

}

export default Course
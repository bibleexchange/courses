import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Lesson extends Component {

	componentWillMount(){
		this.state = {
			lessonBody :""
		}
	}

  render() {

    let course = this.props.data.courses.find(this.findCourse, this)

    return (
      <div>
        <h1>{course.title}</h1>
			lesson
      </div>
    );
  }

  findCourse(course){
    return course.id === this.props.match.params.courseId
  }

 

}

export default Lesson
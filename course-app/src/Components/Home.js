import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
  	console.log(this.props)
    return (
      <div>
	{this.props.data.courses.map(function(course, i){
		return <li key={i}><h2><Link to={"/course/"+course.id}>{course.title}</Link></h2></li>
	})}

      </div>
    );
  }
}

export default Home;
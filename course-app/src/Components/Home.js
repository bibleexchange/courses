import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

class Home extends Component {
  render() {

    return (
      <div id="home">
	{this.props.data.courses.map(function(course, i){
		return <h2 key={i}><Link to={"/course/"+course.id}>{course.title}</Link></h2>
	})}
      </div>
    );
  }
}

export default Home;
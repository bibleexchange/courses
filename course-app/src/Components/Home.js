import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import { connect } from 'react-redux';
import { fetchCoursesIfNeeded } from '../actions/actions'

class Home extends Component {

componentDidMount(){
	this.props.dispatch(fetchCoursesIfNeeded())
}

shouldComponentUpdate(newProps){
	return newProps.courses !== this.props.courses
}

  render() {

  	if(this.props.courses !== false){

    return (
      <div id="home">

	{this.props.courses.map(function(course, i){
		return <h2 key={i}><Link to={"/course/"+course.id}>{course.title}</Link></h2>
	})}
      </div>
    );

    }else if(this.props.hasError){
  		return (<div>{this.props.error}</div>)
  	}else{
  		return null
  	}

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  	courses: state.courses.data,
  	hasError: state.courses.hasError,
  	error: state.courses.error
  }
};

export default connect(
  mapStateToProps
)(Home);
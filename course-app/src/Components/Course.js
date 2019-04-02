import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchCourseIfNeeded } from '../actions/actions'
import { connect } from 'react-redux';

class Section extends Component {
  render() {
   
    let course = this.props.course
    let sectionIndex = this.props.index

    return (
      <div>
        <hr />
        <p>{this.props.id} ({this.props.lessons.length} lessons)</p>
        <ol>
        {this.props.lessons.map(function(les, key){
          return <li key={key}><Link to={"/course/"+course.id+"/"+sectionIndex+"/"+les.id}>{les.title}</Link></li>
        })}
        </ol>
      </div>
    );
  }

}

class Course extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCourseIfNeeded(this.props.router.match.params.courseId))
  }

  shouldComponentUpdate(newProps){
    return newProps.course !== this.props.course
  }

  render() {

    if(!this.props.course){
      return (<div>Waiting...</div>)
    }else{
      
      let course = this.props.course

      return (
        <div>
          <h1>{this.props.course.title}</h1>

          {this.props.course.sections.map(function(sec, key){
            return <h2 key={key}><Section {...sec} course={course} index={key}/></h2>
          })}

        </div>
      );

    }

  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    course: state.course.data,
    hasError: state.course.hasError,
    error: state.course.error
  }
};

export default connect(
  mapStateToProps
)(Course);
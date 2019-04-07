import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchCourseIfNeeded } from '../actions/actions'
import { connect } from 'react-redux';

class RootTask extends Component{

  render(){
    let task = this.props.task
    return (<h2 key={task.id+task.type}><a href={"/course/" + this.props.courseId + "/" + task.id}>{task.id} {task.title}</a></h2>)
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

          {this.props.course.editors.map(function(editor, key){
            return <h2 key={key}>{editor.name}</h2>
          })}

          <hr />
          <h2>Tasks: </h2>

          {this.props.course.tasks.map(function(task){
            return <RootTask task={task} courseId={course.id}/>
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
import React, { Component } from 'react';
import { fetchCourseIfNeeded, fetchTaskIfNeeded } from '../actions/actions'
import { connect } from 'react-redux';

class Task extends Component {

	componentDidMount(){
    this.props.dispatch(fetchTaskIfNeeded(this.props.router.match.params.courseId, this.props.router.match.params.taskId))
    this.props.dispatch(fetchCourseIfNeeded(this.props.router.match.params.courseId))

  }

  shouldComponentUpdate(newProps){
    if(newProps.task !== this.props.task || newProps.course !== this.props.course){
      return true
    }

    return false
  }

  render() {

    if(!this.props.task){
      return (<div>Waiting...</div>)
    }else{
    
    let body = null

    if(this.props.task.html !== false && this.props.task.html !== "false"){
      body = <div dangerouslySetInnerHTML={{ __html: this.props.task.html}} />
    }

    return (
      <div>
        <h2><a href={"/course/"+this.props.course.id}>{this.props.course.title}</a></h2>
			 
        <hr />

        <h1>{this.props.task.title}</h1>

        <hr />
        {body}

        {this.props.task.tasks.map(function(t){
          if(t.html !== false){
            return <div><h2>{t.title}</h2><div dangerouslySetInnerHTML={{ __html: t.html}} /></div>
          }
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
    error: state.course.error,
    task: state.task.data
  }
};

export default connect(
  mapStateToProps
)(Task);


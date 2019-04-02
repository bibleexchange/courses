import fetch from 'cross-fetch'

//COURSES LIST

export const REQUEST_COURSES = 'REQUEST_COURSES'
function requestCourses(options) {
  return {
    type: REQUEST_COURSES,
    options
  }
}

export const RECEIVE_COURSES = 'RECEIVE_COURSES';

function receiveCourses(payload) {
  return {
    type: RECEIVE_COURSES,
    data: payload.courses,
    receivedAt: Date.now()
  }
}

export const SET_COURSES_ERROR = 'SET_COURSES_ERROR';
function setCoursesError(error) {
  return {
    type: SET_COURSES_ERROR,
    hasError: true, 
    error:error
  }
}

//SPECIFIC COURSE ACTIONS

export const REQUEST_COURSE = 'REQUEST_COURSE'
function requestCourse(course) {
  return {
    type: REQUEST_COURSE,
    course
  }
}

export const RECEIVE_COURSE = 'RECEIVE_COURSE'
function receiveCourse(course, payload) {
  return {
    type: RECEIVE_COURSE,
    data: payload.course,
    receivedAt: Date.now()
  }
}

export const SET_COURSE_ERROR = 'SET_COURSE_ERROR';
function setCourseError(error) {
  return {
    type: SET_COURSE_ERROR,
    hasError: true,
    error: error
  }
}

function fetchCourses() {
  return dispatch => {
    dispatch(requestCourses())
    return fetch("http://localhost:5000/api/v1/courses")
      .then(response => response.json())
      .then(json => dispatch(receiveCourses(json)))
  }
}

function fetchCourse(courseId) {
  return dispatch => {
    dispatch(requestCourse(courseId))
    return fetch("http://localhost:5000/api/v1/courses/"+courseId)
      .then(response => response.json())
      .then(json => dispatch(receiveCourse(courseId, json)))
  }
}

function shouldFetchCourses(state) {

  if (!state.courses.data || state.courses.data.length < 1) {
    return true
  } else if (state.courses.isLoading) {
    return false
  } else {
    return true
  }
}

function shouldFetchCourse(state, id) {
  if (!state.course.data) {
    return true
  } else if (state.course.isLoading) {
    return false
  } else if(id === state.course.data.id){
    return false
  }else{
    return true
  }
  
}

export function fetchCourseIfNeeded(id) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchCourse(getState(), id)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchCourse(id))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

export function fetchCoursesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCourses(getState())) {
      return dispatch(fetchCourses())
    } else {
      return Promise.resolve()
    }
  }
}

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
  console.log(payload.data.courses)
  return {
    type: RECEIVE_COURSES,
    data: payload.data.courses,
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
    data: payload.data.course,
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

//

export const REQUEST_TASK = 'REQUEST_TASK'
function requestTask(options) {
  return {
    type: REQUEST_TASK,
    options
  }
}

export const RECEIVE_TASK = 'RECEIVE_TASK';

function receiveTask(payload) {

  return {
    type: RECEIVE_TASK,
    data: payload.data.task,
    receivedAt: Date.now()
  }
}

function graphqlFetch(query, variables){
  return fetch("http://localhost:5000/graphql",{
        method: "POST",
        headers: {
            "Authorization": "Bearer ISNT CREATED", //+ auth.getToken(),
            "Accept": "*/*",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            query: query,
            variables,
        })
    } )
}

function fetchCourses() {

  let courseQuery = "{courses {  id  title  editors {    id  }  tasks {    id    type    value {      path    }    tasks {      id      type      value {        path      }    }  }}}"
  let variables = []

  return dispatch => {
    dispatch(requestCourses())

    return graphqlFetch(courseQuery, variables)
      .then(response => response.json())
      .then(json => dispatch(receiveCourses(json)))
  }

}

function fetchCourse(courseId) {

  let query = `query {
                course(input:{id:"`+courseId+`"}) {
                  id
                  title
                  editors {
                    id
                  }
                  tasks {
                    id
                    title
                    type
                    value {
                      path
                    }

                    tasks {
                      id
                      title
                      type
                      value {
                        path
                      }

                    }
                  }
                }
              }`

  let variables = []


  return dispatch => {
    dispatch(requestCourse(courseId))
    return graphqlFetch(query, variables)
      .then(response => response.json())
      .then(json => dispatch(receiveCourse(courseId, json)))
  }
}

function fetchTask(courseId, taskId) {

  let query = `query ($courseId:String, $taskId:Int){
                  task(input:{courseId:$courseId, taskId:$taskId}){
                    id
                    courseId
                    title
                    html
                  }
                }`
  let variables = {courseId: courseId, taskId: parseInt(taskId)}

  return dispatch => {
    dispatch(requestTask())

    return graphqlFetch(query, variables)
      .then(response => response.json())
      .then(json => dispatch(receiveTask(json)))
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

function shouldFetchTask(state, courseId, taskId) {
  if (!state.task.data) {
    return true
  } else if (state.task.isLoading) {
    return false
  } else if(courseId === state.task.data.courseId && taskId === state.task.data.id){
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

export function fetchTaskIfNeeded(courseId, taskId) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchTask(getState(), courseId, taskId)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchTask(courseId, taskId))
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

import { combineReducers } from 'redux'
import {
  REQUEST_COURSES,
  RECEIVE_COURSES,
  REQUEST_COURSE,
  RECEIVE_COURSE,
  SET_COURSES_ERROR,
  SET_COURSE_ERROR,
  REQUEST_TASK,
  RECEIVE_TASK
} from '../actions/actions'

const initialState = {
  courses:{isLoading:false, hasError:false, data:false},
  course:{isLoading:false, hasError:false, data:false},
  task:{isLoading:false, hasError:false, data:false}
}

const reducer = (state = initialState, action)=>{

  let newState =  Object.assign({}, state)

  switch (action.type) {

    //errors
    case SET_COURSES_ERROR:
      newState.courses.hasError = action.hasError
      newState.courses.error = action.error
      newState.courses.isLoading = false
      break
    
    case SET_COURSE_ERROR:
      newState.course.hasError = action.hasError
      newState.course.error = action.error
      newState.course.isLoading = false
      break

    case REQUEST_COURSES:
      newState.courses.isLoading = true
      break

    case RECEIVE_COURSES:
      newState.courses.isLoading = false
      newState.courses.hasError = false
      delete newState.courses.error
      newState.courses.data = action.data
      newState.courses.lastUpdated = action.receivedAt
      break

    case REQUEST_COURSE:
      newState.course.isLoading = true
      break

    case RECEIVE_COURSE:
      newState.course.isLoading = false
      newState.course.hasError = false
      delete newState.course.error
      newState.course.data = action.data
      newState.course.lastUpdated = action.receivedAt
      break
    
      case REQUEST_TASK:
        newState.task.isLoading = true
        break


      case RECEIVE_TASK:
        newState.task.isLoading = false
        newState.task.hasError = false
        delete newState.task.error
        newState.task.data = action.data
        newState.task.lastUpdated = action.receivedAt
        break
    }

  return newState
}

export default reducer
import fs from 'fs-extra'
import {loadDb} from './helpers/build-db'
import CourseRepository from './objects/course/CourseRepository'
import config from './config'

class database {
	
	constructor(){

		this.config = config
	}

	courses(params){
		if(params.search !== undefined){
			return CourseRepository.where("title","===",params.search.toLowerCase()).get()
		}else{
			return CourseRepository.all();
		}
		
	}

	getCourseByTitle(title){

		let course = this.cache.filter(course => {
			return course.id === title
		})

		return course[0]
	}

	getCourseById(id){
		return 
	}

  hello(){
    return 'Hello world!';
  }

  course(params){

  	if (params.input.id !== undefined) {
    	return CourseRepository.find(params.input.id)
	}else if ( params.input.title !== undefined) {
    	return CourseRepository.where("title", "===",params.input.title).first()
	}else{
	    return false
	}

    
  }

  task(params){
  	return CourseRepository.findTask(params.input.courseId, params.input.taskId)
  }

  readFile(path){
  	return fs.readFileSync(path, 'utf8')
  }

  test(){
  	let file = fs.readFileSync("./gift.md", 'utf8')

  	file = file
  			.replace('(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)')
  			.split('\r\n\r\n')
  	console.log(file)
  	return file
  }

}

export default new database();
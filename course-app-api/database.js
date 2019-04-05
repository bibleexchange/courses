import db from './db';
import fs from 'fs-extra'
const config = require('../config.json')
import {loadDb} from '../helpers/build-db'

class database {
	
	constructor(){
		this.cache = db;
		this.config = config
		this.source = false
	}

	loadSource(){
		this.source = loadDb.init()

	}

	courses(params){

		if(params.search !== undefined){
			return this.cache.filter(course => {
				return course.title.toLowerCase().includes(params.search.toLowerCase())
			})
		}else{
			return this.cache;
		}
		
	}

	getCourse(title){

		let course = this.cache.filter(course => {
			return course.id === title
		})

		return course[0]
	}

	getCourseByIndex(index){
		return this.cache[index]
	}

  hello(){
    return 'Hello world!';
  }

  course(params){

  	if (params.input.id !== undefined) {
    	return this.getCourseByIndex(params.input.id)
	}else if ( params.input.title !== undefined) {
    	return this.getCourse(params.input.title)
	}else{
	    return false
	}

    
  }

  lesson(params){
  	return JSON.parse( this.readFile(this.config.lessonsPath+"/"+params.id+".json") )
  }

  readFile(path){
  	return fs.readFileSync(path, 'utf8')
  }

}

export default new database();
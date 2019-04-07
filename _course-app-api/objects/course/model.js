import PersonRepository from '../person/PersonRepository'
import task from './task'
import Model from '../Model'

class Course extends Model {

	init(){
		this.data = {}
		this.data.id = 9999999999
		this.data.title = null
		this.data.editors = []
		this.data.tasks = []

		this.id = null
		this.title = null
		this.editors = []
		this.tasks = []

		this.taskId = 0
	}

	newTaskId(){
		this.taskId++;
		return this.taskId
	}

	setId(){
		this.id = this.data.id
		return this
	}

	setTitle(){
		this.title = this.data.title
		return this
	}

	addEditor(editor){
		this.editors.push(editor)
		return this
	}

	setEditors(){
		this.data.editors.every(function(editor){
		  this.addEditor(PersonRepository.find(editor))
		  return true
		}, this)

		return this
	}

	addTask(task){
		this.tasks.push(task)
		return this
	}

	setTasks(withHtml = false){
		let course = this
		let courseId = course.id

		this.data.tasks.every(function(roottask){
			let id = course.newTaskId()
			roottask = new task(roottask).build(id, courseId, withHtml)
			this.addTask(roottask.get())
		  return true
		}, this)
	}

	build(withHtml = false){

		this
		  .setId()
		  .setTitle()
		  .setEditors()
		  .setTasks(withHtml)

		  return this
	}

	get(){
		return {
			id: this.id,
			title: this.title,
			editors: this.editors,
			tasks: this.tasks
		}
	}

}

const CourseSchema = `
		  type CourseType {
		    id: String,
		    title: String,
		    editors: [PersonType],
		    tasks: [TaskType]
		  }`

export default Course

export {
	CourseSchema
}
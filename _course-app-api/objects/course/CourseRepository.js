import model from './model'
import Repository from '../Repository'
//import db from './db/db';
import readDirectories from '../../helpers/readDirectories'

const actsData = {
  id: "acts",
  title: "The Book of Acts",
  editors: ["sgrjr","mjd","sgrsr"],
  tasks : [
    {type:"READ_FILE", value: {"path":"acts/000_introduction-to-acts.md"}},
    {type:"READ_FILE", value: {"path":"001_comparison-of-paul-and-peter.md"}},
    {tasks: [
      {type:"READ_FILE", value: {"path":"acts/000_introduction-to-acts.md"}},
      {type:"READ_FILE", value: {"path":"acts/001_comparison-of-paul-and-peter.md"}},
    ]}
  ]
}

class CourseRepository extends Repository {

	init(){
		let dir = new readDirectories()

		this.data = [
			new model(actsData).build(true),
		]

		dir.data.courses.map(co => {
			this.data.push(new model(co).build(true))
		}, this)
	}

  findTask(courseId, taskId){
    let course = this.find(courseId)
    
    let tasks = course.tasks.filter(d => {
        return d.id === taskId
      }, this)

    return tasks[0]
  }

}

export default new CourseRepository()
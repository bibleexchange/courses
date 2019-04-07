const fs = require('fs-extra');
import config from '../../config'

var myMDPlugin = require("../../helpers/EditorPlugin/index");

// full options list (defaults)
var md = require('markdown-it')({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      true,        // Autoconvert URL-like text to links
 
  // Enable some language-neutral replacement + quotes beautification
  typographer:  true,
  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',
 
  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; },
});

md.use(myMDPlugin, {
  containerClassName: "video-embed"
});

const TaskTypes = {
	READ_FILE: "READ_FILE",
	DISPLAY_TEXT: "DISPLAY_TEXT",
	READ_MD_FILE: "READ_MD_FILE",
	READ_HTML_FILE: "READ_HTML_FILE",
	READ_PDF_FILE: "READ_PDF_FILE",
	READ_JSON_FILE: "READ_JSON_FILE",
	READ_TXT_FILE: "READ_TXT_FILE",
	READ_PPT_FILE: "READ_PPT_FILE"
}

class Task {
	constructor(data = false){
		this.init()

		if(data !== false) {
			this.setData(data)
		}
	}

	init(){
		this.data = {}
		this.data.tasks = []
		this.id = null
		this.courseId = null
		this.title = null
		this.type = null
		this.value = null
		this.tasks = []
	}

	setData(data){
		let x = Object.assign({}, data)
		this.data = x
		return this
	}

	get(){
		
		let attributes = {
			id: this.id,
			courseId: this.courseId,
			type: this.type,
			value: this.value,
			tasks: this.tasks,
			html: this.html,
			title: this.title
		}
		return attributes
	}

	setId(id){
		this.id = id
		return this
	}

	setCourseId(courseId){
		this.courseId = courseId
		return this
	}

	setType(){
		this.type = this.data.type
		return this
	}

	setTitle(){

		if(this.data.title !== undefined){
			this.title = this.data.title
		}else if(this.data.value !== undefined && this.data.value.path !== undefined && this.data.value.path !== ""){
			let title = this.data.value.path
				.split("/")
				.pop()
				.split(".")[0]
				.replace("-"," ")
				.replace("_"," ")
				.toUpperCase()
			this.title = title
		}else{
			this.title = "Task " + this.data.id
		}
		
		return this
	}

	setValue(){
		this.value = this.data.value
		return this
	}

	addSubTask(task){
		this.tasks.push(task)
		return this
	}

	setSubTasks(id, courseId){

		let counter = id + 0.1

	  if(this.data.tasks !== undefined){

	    this.data.tasks.map(function(v){
	      let subtask = new Task(v)
	      subtask.build(counter, courseId, true)
	      this.addSubTask(subtask.get())
	      counter += 0.1
	    }, this)

	  }

		return this
	}

	setHtml(){

		switch(this.type){

			case TaskTypes.READ_FILE:
			case TaskTypes.READ_HTML_FILE:
			case TaskTypes.READ_JSON_FILE:
			case TaskTypes.READ_TXT_FILE:
				this.html = this.readFromFile()
				break;

			case TaskTypes.READ_MD_FILE:
				this.html = md.render(this.readFromFile())
				break;
			case TaskTypes.DISPLAY_TEXT:
				this.html = "<p>Test html 2</p>"
				break;

			case TaskTypes.READ_PDF_FILE:
			case TaskTypes.READ_PPT_FILE:
				this.html = '<p><a href="'+this.value.path+'">view this link</a>'
				break;


			default:
				this.html = "<h1>Test html 3"+this.type == TaskTypes.READ_FILE + " </h1>"
		}

		return this
	}

	readFromFile(){
		
		let path = config.courseRoot+this.value.path
		
        if (fs.existsSync(this.value.path) ){
            let rawdata = fs.readFileSync(this.value.path, "UTF8");  
            return rawdata
        }else if(fs.existsSync(path) ){
        	let rawdata = fs.readFileSync(path, "UTF8");  
            return rawdata
        }

        return "<blockquote>FAILED to FIND "+this.value.path+"</blockquote>"
	}

	build(id, courseId, withHtml = false){

		this
		  .setId(id)
		  .setCourseId(courseId)
		  .setType()
		  .setValue()
		  .setTitle()
		  .setSubTasks(id, courseId)
		  .setHtml()

		  return this
	}

}

const TaskSchema = `

  type SubTaskType {
  	id: String
  	courseId: String
  	type:String
  	value: NodeType
  	html: String
  	title: String
  }

  type TaskType {
    id: String
    courseId: String
    type: String
    value: NodeType
    title: String
    tasks: [SubTaskType]
    html: String
  }`

export default Task

export {
	TaskSchema
}
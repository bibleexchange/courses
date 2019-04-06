class Course {
	constructor(data = false){

		this.init()

		if(data !== false) {
			Object.assign(this.data, data)
		}
	}

	init(){
		this.data = {}
		this.data.id = 7
		this.data.title = null
		this.data.editors = []
		this.datatasks = []
	}

	get(){
		return this.data
	}
}

export default Course
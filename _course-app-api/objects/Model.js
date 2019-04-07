class Model {
	constructor(data = false){
		this.init()

		if(data !== false) {
			Object.assign(this.data, data)
		}
	}

	getData(){
		return this.data
	}

	setProp(name, value){
		this[name] = value
		return this
	}

}

export default Model
class Person {
	constructor(data = false){

		this.init()

		if(data !== false) {
			Object.assign(this.data, data)
		}
	}

	init(){
		this.data = {}
		this.data.name = ""

		this.id = null
		this.name = null
	}

	getData(){
		return this.data
	}

	setId(){
		this.id = this.data.id
		return this
	}

	setName(){
		this.name = this.data.name
		return this
	}

	build(){

		this
		  .setId()
		  .setName()

		  return this
	}

	get(){
		this.build()

		return {
			id: this.id,
			name: this.name
		}
	}

}

const PersonSchema = `
		  type PersonType {
		    id: String,
		    name: String
		  }`

export default Person

export {
	PersonSchema
}
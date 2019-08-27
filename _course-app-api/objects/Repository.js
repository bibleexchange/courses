import model from './Model'

class Repository {

	constructor(){
		this.withHtml = false
		this.init()
		this.filterResults = false
	}

	init(){return this}

	find(id){
		var result = this.data.filter(item => {
		 return item.id === id
		})
		return result[0]
	}

	findByIndex(index){
		return this.data[index]
	}

	get(){
		if(this.filterResults === false){
			return this.all()
		}else{
			return this.data.filter(d => {
				return d[this.filterResults.property].toLowerCase().includes(this.filterResults.value.toLowerCase())
			}, this)
		}
		
	}

	all(){
		return this.data
	}

	first(){
		if(this.filterResults === false){
			return this.data[0]
		}else{
			
			let results = this.data.filter(d => {
				return d[this.filterResults.property].toLowerCase().includes(this.filterResults.value.toLowerCase())
			}, this)

			return results[0];
		}
	}

	where(property, comparison, value){
		this.filterResults = {
			property, comparison, value
		}

		return this
	}

}

export default Repository
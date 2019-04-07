import model from './model'
import Repository from '../Repository'

class PersonRepository extends Repository {

	init(){
		this.data = [
			new model({"id":"sgrjr","name":"Stephen Reynolds, Jr."}).build(),
			new model({"id":"jrrsr", "name":"James R Reynolds Sr"}).build(),
			new model({"id":"sgrsr", "name":"Stephen Reynolds Sr"}).build(),
			new model({"id":"mjd", "name":"Matthew James Derocher"}).build()
		]
	}

}

export default new PersonRepository()
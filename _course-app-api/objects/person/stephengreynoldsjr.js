import model from './model'

const person = new model(
  	{"id":"sgrjr","name":"Stephen Reynolds, Jr."}
)

person.build()

export default person.attributes()
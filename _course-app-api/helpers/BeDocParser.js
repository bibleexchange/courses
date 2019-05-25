import peg from 'pegjs'

//https://blog.beezwax.net/2017/07/07/writing-a-markdown-compiler/

class BeDocParser {

	constructor(text){
		this.text = text
		this.grammar = "start = ('a' / 'b')+" 
		this.generate()
	}

	//To generate a parser, call the peg.generate method and pass your grammar as a parameter:
	generate(){
		this.parser = peg.generate(this.grammar);
	}

	parse(){
		return this.parser.parse(this.text)
	}
}
// Include it and extract some methods for convenience
const server = require('server');
const { get, post } = server.router;
const url = require('url');

// Launch server with options and routes
server({ port: 8080 }, [
  get('/', ctx => 'Hello world'),
  post('/', ctx => console.log(ctx.data))

  //through-the-bible-for-beginners
]);

class App {
	constructor(){
		this.url = window.location.href
		console.log("Params loaded")
		this.getParams()
		console.log("Course loaded")
		this.getCourse()
		console.log("File loaded")
		this.getFile()
	}

	getParams () {
		
		var params = {};
		var parser = document.createElement('a');
		parser.href = this.url;
		var query = parser.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			params[pair[0]] = decodeURIComponent(pair[1]);
		}

		this.params = params;
		return this
	}

	getCourse(){
		this.course = this.params.course? this.params.course:welcome
	}

	getFile(){
		fetch("/"+this.course + ".md")
		.then( response => response.text() )
		.then( text => console.log(text) )
	}
}

//var app = new App(); 

//console.log(app.params)
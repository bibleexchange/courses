import model from './model'

const acts = new model( {
  "id":"acts",
  "title":"The Book of Acts",
  "editors":[
  	{"name":"Stephen Reynolds, Sr."},
  	{"name":"Stephen Reynolds, Jr."},
  	{"name":"Matthew James Derocher"}
  ],
  "tasks":[
  	
  	{
  		"id":1, 
  		"prereq":[], 
  		"next": 2,
  		"description":"", 
  		"steps":[
  			{
  			"action":"READ",
  			"process":"local_file",
  			"value":"acts/000_introduction-to-acts.md"
  			}
  		]

  	},

  	{
  		"id":2, 
  		"prereq":[1], 
  		"next": false,
  		"type":"read", 
  		"description":"", 
  		"link":{
  			"type":"local_file", 
  			"value":"001_comparison-of-paul-and-peter.md"
  		}
  	},

  ]
}
)

export default acts
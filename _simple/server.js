var http = require('http');
var url = require('url');
var fs = require('fs');
var MarkdownIt = require('markdown-it');
var mdcontainer = require('markdown-it-container');

var quiz =  {

  validate: function(params) {
    return params.trim().match(/^quiz\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^quiz\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '{{QUIZ';

    }else {
      // closing tag
      return '}}\n';
    }
  }
}

function transform(data){
  md = new MarkdownIt({
              html:         true,        // Enable HTML tags in source
              xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                    // This is only for full CommonMark compatibility.
              breaks:       false,        // Convert '\n' in paragraphs into <br>
              langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                    // useful for external highlighters.
              linkify:      false,        // Autoconvert URL-like text to links

              // Enable some language-neutral replacement + quotes beautification
              typographer:  false,

              // Double + single quotes replacement pairs, when typographer enabled,
              // and smartquotes on. Could be either a String or an Array.
              //
              // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
              // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
              quotes: '“”‘’',

              // Highlighter function. Should return escaped HTML,
              // or '' if the source string is not changed and should be escaped externally.
              // If result starts with <pre... internal wrapper is skipped.
              highlight: function (/*str, lang*/) { return ''; }
            })
            .use(mdcontainer, 'quiz',quiz);

  return md.render(data);
}


function useTemplate(opts, template = "default"){

  let temp =  null

  switch(template){

    case "error":
      return "<html><head><link src='tepty'/></head><body>"+opts.body+"</body></html>"
      break;
    
    case "print":
      temp = readAFile("./print.html", "utf8")
      temp = temp.replace("{{html}}", opts.html)
      return temp
      break;

    default:
      temp = readAFile("./template.html", "utf8")
      temp = temp.replace("{{main}}", opts.main)
      temp = temp.replace("{{aside}}", opts.aside)
      return temp
  }
  

}

function readAFile(filename, enc = false){
  
  if(enc === false){
    return fs.readFileSync(filename, function(err, data) {
        if (err) {
          return false;
        }  
        return data;
      });
  }else{
    return fs.readFileSync(filename, enc, function(err, data) {
      if (err) {
        return false;
      }  
      return data;
    });

  }

}

function getSiteIndex(){
      let list = "# Bible School Courses [home](/)"
      let filename = ""

      fs.readdirSync("./..").forEach(file => {
        
        if(file.includes(".") === false && file.includes("_") === false){
          filename = file.split("-").map(function(item){return item.charAt(0).toUpperCase() + item.slice(1)}).join(" ")
          list += "\n## ["+filename+"]("+file+")"
        }

      });

      return list
}

function getFileInfo(str){

  let matchTypes = {
    css: "text/css",
    ico: "image/x-icon",
    png: "image/png",
    md: "text/html",
    html: "text/html",
    dir:"text/html"
  }

  let info = {
    raw: str,
    isDir: false,
    extension: "dir",
    contentType: "text/html",
    path: str.substr(1).split("/"),
    course: null,
    lesson: null,
    value: null
  }

  let ext = str.split(".")

  if(ext.length >= 2){
    info.extension = ext[1]
    info.isDir = false
    
  }else{
    info.isDir = true
  }

  info.contentType = matchTypes[info.extension]

  if(info.path.length >= 1){
    info.course = info.path[0]
    if(info.course === ""){info.course = null}
  }
  
  if(info.path.length >= 2){
    info.lesson = info.path[1]
  }

  info.value = loadFile(info)

  return info;
}

function getAllLessons(path){
   let index = readAFile("../"+path[0]+"/index.md", "utf8")
        let regex = /\[(.*?)\]\((.*?)\)/g;
        let result;
        let list = [];

        while((result = regex.exec(index)) !== null){
          list.push([result[1], result[2]])
        }

        let md = index;
        
        list.map(function(item){
          md += "\n" + readAFile("../"+item[1])
        })
          

        return transform(md)
}

function translateQuiz(str){
        let regex = /{{QUIZ([^}]*)}}/gm;
        let result;
        let quiz = []
        let q = {question:null, answer:null}

        while((result = regex.exec(str)) !== null){
          nq = result[1].replace(/(<([^>]+)>)/ig, "")
          nq = nq.split("\n\n\n")

          nq.map(function(item){
            item = item.replace("\n\n","")
            item = item.split('\n',2)

            if(item.length === 2 ){
              q.question = item[0]
              q.answer = item[1]
              quiz.push(q)
            }
          })
        }
          
        return str.replace("<body>","<body><div id='quiz' data-quiz='"+JSON.stringify(quiz)+"'></div>")
}

function loadFile(info){
  let value;
  let opt = {};
  let template = "default";

  switch(info.extension){
    
    case "css":
    case "ico":
      value = readAFile("."+info.raw)
      break;

    case "png":
      value = readAFile("./../_images"+raw)
      break;

    case "dir":

      if(info.course === null){

        opt.main =  transform( getSiteIndex() )
        opt.aside = null
      }else if(info.course !== null && info.lesson === null){
        opt.main = transform(readAFile("../"+info.course+"/index.md", "utf8") )
        opt.aside = transform( getSiteIndex() )
      }else if(info.course !== null && info.lesson === "all"){
        opt.html = getAllLessons(info.path)
        template = "print"
      }else{
        opt.main = transform("# Not sure what you need ??")
      }
      
      value = useTemplate(opt, template)

      break;

    case "md":
    case "html":
      template = "default";
      opt.aside = transform( readAFile("../"+info.course+"/index.md", "utf8") )
      opt.main = transform( readAFile("../"+info.raw, "utf8") )
      value = useTemplate(opt, template)      
      value = translateQuiz(value)

      break;

    default:
      let html = "<h1>404 File Not Found</h1>"
      value = useTemplate({html: html}, "error")
      return 
  }

  return value
}

http.createServer(function (req, res) {
  var fileInfo = getFileInfo(url.parse(req.url, true).pathname);
  res.writeHead(200, {'Content-Type': fileInfo.contentType} );
  res.write(fileInfo.value);
  return res.end();
}).listen(8080);

//node server.js
/*
to do:
- create function to turn filename into a pretty title for lessons

*/

const fs = require('fs-extra');
const loadDB = require('./helpers/readDirectories')

class readDirectories {

    init(){

        this.config = require('../config.json')

        if (!fs.existsSync(config.binPath)) {
            fs.mkdirSync(this.config.binPath);
        }

        if (!fs.existsSync(config.lessonsPath)) {
            fs.mkdirSync(this.config.lessonsPath);
        }

        this.directories = 

        this.data = {
            files: this.getFiles(config.courseRoot),
            directories: this.getDirectories(config.courseRoot, config.ignore),
            courses: []
        }

        this.lessons = []
        this.sectionFile = []
        this.UUID = 1

        this.mapOverDirectories()
    }

    mapOverDirectories(){

    this.data.directories.map(function(value, index){
        let title = capitalizeFirstLetters(value.replace(/-/g, " ").replace(/_/g, " "))
        let sec = []
        let sections = []
        let path = this.config.courseRoot+value

        if (fs.existsSync(path + "/index.json") ){
            //console.log("getting index.json for: " + path)
            let rawdata = fs.readFileSync(path + "/index.json");  
            sec = JSON.parse(rawdata).sections; 

            sec.map(function(section){
                return section.lessons.map(function(lesson){
                    return prepareLesson(lesson, value);
                })
            })

        }else{
            sections = getDirectories(path, [])

        if(sections.length <= 0){
            lessons = []
            sectionFile = getFiles(config.courseRoot+value)

            sectionFile.map(function(f1){
                let fullFileName = config.courseRoot+value+"/"+f1
                let fileObject = getFileMeta(fullFileName, f1)
                if (isATrueLesson(fileObject)){
                    fileObject = prepareLesson(fileObject, value);
                    lessons.push(fileObject)
                }
            })

            sec = [{id: "",lessons: lessons}]

        }else{
            sections.map(function(section, i){
                lessons = []
                sectionFile = getFiles(config.courseRoot+value)

                sectionFile.map(function(f){
                    let fullFileName = config.courseRoot+value+"/"+f
                    let fileObject = getFileMeta(fullFileName, f)
                    if (isATrueLesson(fileObject)){
                        fileObject = prepareLesson(fileObject, value);
                        lessons.push(fileObject)
                    }

                })

                sec.push({id:section, lessons : lessons })
            })
        }
        }
        
    this.data.courses[index] = {id: value, title:title, sections: sec}
})

    return true
    

        }

    function loadJson(path){
        return false
    }

    function getFiles(dir){
        let fileList = [];
     
        var files = fs.readdirSync(dir);
        for(var i in files){
            if (!files.hasOwnProperty(i)) continue;

            if (!fs.statSync(dir+'/'+files[i]).isDirectory()){
                fileList.push(files[i]);
            }
        }
        return fileList;
    }

    function getDirectories(dir, ignoreThese){
        let fileList = [];
     
        var files = fs.readdirSync(dir);
        for(var i in files){
            var name = files[i];
            if (fs.statSync(dir+'/'+files[i]).isDirectory() && !ignoreThese.includes(name) && name.charAt(0) !== "_" && !name.includes('related')){
                fileList.push(name);
            }
        }
        return fileList;
    }

    function capitalizeFirstLetters(str){
          return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
              return letter.toUpperCase();
          })
        }

    function saveLessonFile(fileObject){
        fs.writeFileSync(config.lessonsPath+"/"+fileObject.uuid+".json", JSON.stringify(fileObject))
        return true
    }

    function isATrueLesson(fileObject){
        if( config.fileBlackList.includes(fileObject.fileName) || !config.extensionsWhiteList.includes(fileObject.type)){
            return false
        }else {
            return true
        }
    }

    function getFileMeta(pathToFile,fileName){

        let type = fileName.substr(fileName.lastIndexOf('.'))

          let data = {
            pathToFile: pathToFile,
            fileName: fileName,
            type: type,
            link: pathToFile.replace("../", config.lessonsURLPath)
          }

          return data
    }

    function getUUID(){
        UUID = UUID + 1
        return UUID
    }

    function prepareLesson(lesson, course_id){

        lesson.id = getUUID()

        switch(lesson.type){
            case ".pdf":
              lesson.content = "<a href='"+lesson.link+"''>Follow this link to "+lesson.link+"</a>"
             case "inline":
                lesson.content = fs.readFileSync(lesson.pathToFile, "utf8");
            default:
             lesson.content = fs.readFileSync(lesson.pathToFile, "utf8")
        }

        lesson.title = lesson.fileName
        lesson.course_id = course_id

        return lesson;
    }

}

export default readDirectories
/*
to do:
- create function to turn filename into a pretty title for lessons
*/

const fs = require('fs-extra');

class readDirectories {

    constructor(){
        this.init()
    }

    init(){

        this.config = require('../config.json')

        if (!fs.existsSync(this.config.binPath)) {
            fs.mkdirSync(this.config.binPath);
        }

        if (!fs.existsSync(this.config.lessonsPath)) {
            fs.mkdirSync(this.config.lessonsPath);
        }

        this.data = {
            files: this.getFiles(this.config.courseRoot),
            directories: this.getDirectories(this.config.courseRoot, this.config.ignore),
            courses: []
        }
        this.UUID = 0;

        this.mapOverDirectories()
    }

    getUUID(){
        this.UUID++
        return this.UUID
    }

    mapOverDirectories(){

    this.data.directories.map(function(value, index){

        let course = {
            id: value,
            title: this.capitalizeFirstLetters(value.replace(/-/g, " ").replace(/_/g, " ")),
            path: this.config.courseRoot+value,
            tasks:[]
        }

        if (fs.existsSync(course.path + "/index.json") ){
            //console.log("getting index.json for: " + path)
            let rawdata = fs.readFileSync(course.path + "/index.json");  
            course = Object.assign(course, JSON.parse(rawdata)); 
        }else{
            
            //get all file sin the courses root directory inorder to build tasks from them        
            let files = this.getFiles(course.path)
 
            files.map(function(f1){
                let task = this.prepareTask(this.config.courseRoot+value+"/"+f1, course.id) 

                if (this.isATrueLesson(task.value, task.fileType)){
                    course.tasks.push(task)
                }
            }, this)

            //get all child directories after the courses root directory to build tasks from them
            let folders = this.getDirectories(course.path, [])

            folders.map(function(section, i){

                let task = this.prepareTask(this.config.courseRoot+section, course.id) 

                let sectionFile = this.getFiles(this.config.courseRoot+value)

                sectionFile.map(function(f){
                    let fullFileName = this.config.courseRoot+value+"/"+f
                    console.log(fullFileName)
                    let subtask = this.prepareTask(fullFileName, course.id);

                    if (this.isATrueLesson(subtask.value, subtask.fileType) ){
                        task.tasks.push(subtask)
                    }

                }, this)

            }, this)
        }
        
    this.data.courses[index] = course

    }, this)

    return true
    }

    loadJson(path){
        return false
    }

    getFiles(dir){
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

    getDirectories(dir, ignoreThese){
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

    capitalizeFirstLetters(str){
          return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
              return letter.toUpperCase();
          })
        }

    saveLessonFile(fileObject){
        fs.writeFileSync(this.config.lessonsPath+"/"+fileObject.uuid+".json", JSON.stringify(fileObject))
        return true
    }

    isATrueLesson(path, fileType){
        let response = false

        if( this.config.fileBlackList.includes(path) || !this.config.extensionsWhiteList.includes(fileType)){
            response = false
        }else {
           response = true
        }

        return response
    }

    prepareTask(path, courseId){

          let task = {
            id: this.getUUID(),
            courseId: courseId,
            fileType: path.substr(path.lastIndexOf('.')).replace(".",""),
            type: null,
            value: {path: path},
            tasks: []
          }

          task.type = "READ_" + task.fileType.toUpperCase() + "_FILE"

        return task;
    }





}

export default readDirectories
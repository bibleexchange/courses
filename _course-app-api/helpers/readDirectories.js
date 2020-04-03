/*
to do:
- create function to turn filename into a pretty title for lessons
*/
import config from './../config.js'
import fs from 'fs-extra'

class readDirectories {

    constructor(){
        this.init()
    }

    init(){

        this.config = config

        if (!fs.existsSync(this.config.binPath)) {
            fs.mkdirSync(this.config.binPath);
        }

        if (!fs.existsSync(this.config.lessonsPath)) {
            fs.mkdirSync(this.config.lessonsPath);
        }

        this.data = {
            directories: this.getDirectories(this.config.courseRoot, this.config.ignore),
            courses: []
        }
        this.UUID = 0;

        this.mapOverDirectories()

        return this
    }

    save(){


        fs.writeFile(this.config.outputDBTo, JSON.stringify(this), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Database file has been created at ", this.config.outputDBTo);
        });
        let saveLessonFile = this.saveLessonFile
        let lessonsPath = this.config.lessonsPath
        this.data.courses.map(function(course){
            course.tasks.map(function(task){
                saveLessonFile(task, lessonsPath)
            })
        })
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
            
            //get all files in the courses root directory inorder to build tasks from them        
            let files = this.scan(course.path)
 
            files.map(function(file){

                if(file.type === "dir"){
                    // If a Directory then its interpreted as 1 main task with subtasks

                    let task1 = Object.assign({},this.prepareTask(file.path, course.id, false) )
                    let files = this.getFiles(file.path)

                    files.map(function(name){
                        let subtask = this.prepareTask(file.path+"/"+name, course.id);
                        
                        if (this.isATrueLesson(subtask.value, subtask.fileType) ){
                            task1.tasks.push(subtask)
                        }

                    }, this)

                    course.tasks.push(task1)

                }else if(file.type === "file"){

                    let task2 = this.prepareTask(file.path, course.id)

                    if (this.isATrueLesson(task2.value, task2.fileType)){
                        course.tasks.push(task2)
                    }

                }

            }, this)

        }

    this.data.courses[index] = course

    }, this)

    //console.log(this.data.courses[4].tasks)

    return true
    }

    loadJson(path){
        return false
    }

    scan(dir){

      let fileList = [];
     
      let ignoreThese = this.config.ignore

        var files = fs.readdirSync(dir);
        for(var i in files){
             
            let file = {
                path: dir + "/" +files[i], 
                type:null
            }

            if (!ignoreThese.includes(file.path) && file.path.charAt(0) !== "_" && !file.path.includes('related')){
                
                if(fs.statSync(dir+'/'+files[i]).isDirectory()){
                    file.type = "dir"
                }else{
                    file.type = "file"
                }

                fileList.push(file);
            }
        }
        return fileList;


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

    getDirectories(dir){

        let fileList = [];
        let ignoreThese = this.config.ignore

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

    saveLessonFile(file, lessonsPath){

        const texts = ["READ_MD_FILE","READ_HTML_FILE","READ_TXT_FILE"]
        if(texts.includes(file.type)){
            file.value.raw = fs.readFileSync(file.value.path).toString('utf-8');
        }

        fs.writeFileSync(lessonsPath+"/"+file.id+".json", JSON.stringify(file))
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

    prepareTask(path, courseId, isAfile = true){

        let title = path
            .split("/")
            .pop()
            .split(".")[0]
            .replace(/\-/g," ")
            .replace(/\_/g," ")
            .toUpperCase()

          let task = {
            id: this.getUUID(),
            courseId: courseId,
            tasks: [],
            title: title
          }

          if(isAfile){
            task.fileType = path.substr(path.lastIndexOf('.')).replace(".","")
            task.value = {path: path}
            task.type = "READ_" + task.fileType.toUpperCase() + "_FILE"
          }else{
            delete task.fileType
            delete task.value
            delete task.type
          }


        return task;
    }





}

export default readDirectories
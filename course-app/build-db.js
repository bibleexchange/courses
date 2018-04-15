'use strict';

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const config = require('./config.json')
const files = getFiles(config.courseRoot)
const directories = getDirectories(config.courseRoot, config.ignore)

if (!fs.existsSync(config.binPath)) {
    fs.mkdirSync(config.binPath);
}

if (!fs.existsSync(config.lessonsPath)) {
    fs.mkdirSync(config.lessonsPath);
}

let data = {
	files,
	directories,
	courses: []
	
}
let lessons = []
let sectionFile = []
let UUID = 1

data.directories.map(function(value, index){
	let title = capitalizeFirstLetters(value.replace(/-/g, " ").replace(/_/g, " "))
	let sec = []
	let sections = getDirectories(config.courseRoot+value, [])

	if(sections.length <= 0){
        lessons = []
        sectionFile = getFiles(config.courseRoot+value)

        sectionFile.map(function(f1){
            let fullFileName = config.courseRoot+value+"/"+f1
            let fileObject = getFileMeta(fullFileName, f1)
            if (isATrueLesson(fileObject)){
                saveLessonFile(fileObject)
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
                    saveLessonFile(fileObject)
                    lessons.push(fileObject)
                }

            })

			sec.push({id:section, lessons : lessons })
		})
	}
	
	
	data.courses[index] = {id: value, title, sections: sec}
})


fs.writeFile(config.outputDBTo,JSON.stringify(data) )
//console.log(chalk.green('Database saved successfully.\n'), data)

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

    switch(fileObject.type){
        case ".pdf":
          fileObject.content = "<a href='"+fileObject.link+"''>Follow this link to "+fileObject.link+"</a>"
        default:
         fileObject.content = fs.readFileSync(fileObject.pathToFile, "utf8")
    }

    fs.writeFileSync(config.lessonsPath+"/"+fileObject.uuid+".json", JSON.stringify(fileObject))
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
        uuid: UUID,
        pathToFile: pathToFile,
        fileName: fileName,
        type: type,
        link: pathToFile.replace("../", config.lessonsURLPath)
      }
      UUID = UUID + 1

      return data
}
'use strict';

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

const config = require('../config.json')

const files = getFiles(config.courseRoot)
const directories = getDirectories(config.courseRoot, config.ignore)

let data = {
	files,
	directories,
	courses: []
	
}

data.directories.map(function(value, index){
	let title = capitalizeFirstLetters(value.replace(/-/g, " ").replace(/_/g, " "))
	let sec = []
	let sections = getDirectories(config.courseRoot+value, [])
	
	if(sections.length <= 0){
		sec = [{id: "",lessons: getFiles(config.courseRoot+value)}]
	}else{
		sections.map(function(section, i){
			sec.push({id:section, lessons : getFiles(config.courseRoot+value) })
		})
	}
	
	
	data.courses[index] = {id: value, title, sections: sec}
})


fs.writeFile('../public/db.json',JSON.stringify(data) )
console.log(chalk.green('Database saved successfully.\n'), data)

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
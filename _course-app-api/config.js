import dotenv from 'dotenv'
dotenv.config()

var config = {
"ignore": ["bin",".git","course-app","bible_files",".ignore"],
"courseRoot": process.env.COURSE_ROOT_PATH+"/",
"outputDBTo":"./db/db.json",
"lessonsURLPath":"https://githubusercontent.com/raw/",
"lessonsPath":"./db/lessons",
"binPath":"./db",
"fileBlackList":["meta.json","be-notebook.json"],
"extensionsWhiteList":["md","html","doc","ppt","txt","json","pdf"]
}

export default config
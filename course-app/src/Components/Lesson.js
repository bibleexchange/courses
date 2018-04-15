import React, { Component } from 'react';
import { Link } from 'react-router-dom'
var myMDPlugin = require("../EditorPlugin/index");

// full options list (defaults)
var md = require('markdown-it')({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      true,        // Autoconvert URL-like text to links
 
  // Enable some language-neutral replacement + quotes beautification
  typographer:  true,
  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',
 
  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; },
});

md.use(myMDPlugin, {
  containerClassName: "video-embed"
});

class SmartParagraph extends React.Component {

  render(){

        return <span dangerouslySetInnerHTML={{__html: md.render(this.props.line.value)}} />
  }

}

export default SmartParagraph;

var MarkdownIt = require('markdown-it')

// full options list (defaults)
var md = new MarkdownIt({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
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
});

class Lesson extends Component {

	constructor(props){
    super(props)

    let course = this.props.data.courses.find(this.findCourse, this)
    let section = course.sections[this.props.match.params.sectionId]

	this.state = {
      course: course,
			lesson: section.lessons.find(this.findLesson, this)
		}

	}

  render() {

    let course = this.state.course
    let lesson = this.state.lesson

    let content = lesson.content

    if(lesson.type === ".md"){
console.log(content)
      content = md.render(content);
      console.log(content)
    }

    return (
      <div>
        <h1>{course.title}</h1>
			
        <div dangerouslySetInnerHTML={{ __html: content}} />
      </div>
    );
  }

  findCourse(course){
    return course.id === this.props.match.params.courseId
  }

  findLesson(lesson){
    let lessonId = parseInt(this.props.match.params.lessonId, 10)
    console.log(lesson, lessonId)
    return lesson.uuid === lessonId
  }

}

export default Lesson
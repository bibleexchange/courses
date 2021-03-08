import { useState, Component } from 'react'
import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import { withRouter } from "next/router"
import eStyles from './Course.module.css'
import SelectLessonForm from '../Common/SelectLessonForm'
import Line, {lineTypes, templates} from '../Blocks/Line'

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	file:false,
    	lineTypes: lineTypes,
    	lines:[],
      lesson: 1,
      lessons:[]
    }
  }

  componentDidMount() { /**/ }

UNSAFE_componentWillReceiveProps(newProps){

  if(newProps.router.query.course !== this.props.router.query.course || this.state.lines === undefined){
    
    let lines = []
    const course = newProps.router.query.course

    if(localStorage.getItem(course) === null){
      lines = [];
      localStorage.setItem(course, JSON.stringify(lines));
    }else{
      lines = JSON.parse(localStorage.getItem(course));
      if(lines === null) lines = []
    }

    this.setState({
      lines: lines,
      lessons: this.getLessons(lines)
    })

  }
}

  render() {

      const lesson = this.state.lesson
      const handleSelectLesson = this.handleSelectLesson.bind(this)
      const columnStyle = {height:"500px", overflow:"scroll"}

    return (
	<div>
	      <Head>
	        <title>Course | Youth Revelation Study</title>
	        <link rel="icon" href="/favicon.ico" />
	        <meta charset="UTF-8" />
	      </Head>

		<main>
    <body className={eStyles.textbook}>
      <header><h1>{this.props.router.query.course? this.props.router.query.course.toUpperCase():""} | Lesson {this.state.lesson}</h1></header>
      <div className={eStyles.textbookBody}>
        <main className={eStyles.textbookContent}>
          {this.state.lines.map(function(line, i){
            if(line.lesson === lesson){
              return <Line key={i} index={i} data={line} read={true} style={columnStyle}/>
              }
          })}
        </main>
        <nav className={eStyles.textbookNav}>
          {this.state.lessons.map(function(less, k){
            return <SelectLessonForm key={k} lesson={less} handleSelectLesson={handleSelectLesson}/>
          })}
        </nav>
        <aside className={eStyles.textbookAside}></aside>
      </div>
      <footer></footer>
    </body>
		</main>


</div>
    );
  }

handleSelectLesson(e){
    e.preventDefault();
    const id = e.target.id.value
    let newState = {...this.state}
    newState.lesson = parseInt(id)
    this.setState({...newState})
}

getLessons(lines){

  let lessons = []
  let i;
  let id = 0;
  let lindex = 0;

  for(i = 0; i < lines.length; i++){
    id = parseInt(lines[i].lesson)
    lindex = id-1

    if(lessons[lindex] === undefined){
      lessons[lindex] = {id:id, count:1}
    }else{
      lessons[lindex] = {id:id, count:lessons[lindex].count+1}
    }
    
  }

  return lessons
}


}
export default withRouter(Course)
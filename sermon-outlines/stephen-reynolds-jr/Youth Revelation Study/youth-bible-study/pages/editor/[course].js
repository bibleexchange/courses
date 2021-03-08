import { useState, Component } from 'react'
import styles from '../../styles/Revelation.module.css'
import Head from 'next/head'
import { withRouter } from "next/router"
import eStyles from './Editor.module.css'
import SelectLessonForm from '../Common/SelectLessonForm'
import Line, {lineTypes, templates} from '../Blocks/Line'

function NewLineForm({index, handleNewLine}){
  return (<div style={{height:"25px", backgroundColor:"#dcdcdc", color:"#dcdcdc", margin:"15px", width:"100%", textAlign:"center"}}><form style={{ background:"none"}} onSubmit={handleNewLine}>
              <input type="hidden" name="index" value={index}/>
              <input type="text" name="raw" />

                <select style={{background:"none"}} name="lineType" id={"lineTypes" + index} defaultValue="md">
                  {lineTypes.map(function(t){
                    return <option key={t} value={t}>{t}</option>
                  })}

                  <option value="raw">raw</option>
          </select>
       

              <input style={{background:"none"}} type="submit" value="+" />
            </form></div>)
}


function MoveToLessonForm({index, lesson, handleMoveToLesson}){
  return (<div style={{backgroundColor:"#dcdcdc", color:"#dcdcdc", margin:"15px", width:"100%", textAlign:"center"}}>
        <form style={{ background:"none"}} onSubmit={handleMoveToLesson}>
              <input type="hidden" name="index" value={index}/>
              <input type="text" name="lesson" defaultValue={lesson}/>
              <input style={{background:"none"}} type="submit" value="move to lesson" />
            </form></div>)
}



class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	file:false,
    	lineTypes: lineTypes,
    	lines:[],
      lesson: 1,
      lessons:[],
      showRaw: false
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

  	  const handleNewLine = this.handleNewLine.bind(this)
  	  const update = this.update.bind(this)
  	  const deleteLine = this.deleteLine.bind(this)
      const moveToLesson = this.handleMoveToLesson.bind(this)
      const lesson = this.state.lesson
      const handleSelectLesson = this.handleSelectLesson.bind(this)
      const showRaw = this.state.showRaw
      const toggleRaw = this.toggleRaw.bind(this)
      const copyTextToClipboard = this.copyTextToClipboard.bind(this)
      let rawStyle = {}
      const columnStyle = {height:"500px", overflow:"scroll"}
      if(showRaw){
         rawStyle = {display:"block"}        
      }
    return (
	<div>
	      <Head>
	        <title>Block Editor | Youth Revelation Study</title>
	        <link rel="icon" href="/favicon.ico" />
	        <meta charset="UTF-8" />

	      </Head>

		<main>

    <h1 style={{borderBottom:"solid 2px gray", position:"fixed", top:"0", height:"75px", backgroundColor:"white", width:"75%", marginTop:"0"}}>Editor | Lesson {this.state.lesson} <button onClick={this.save.bind(this)}>SAVE</button><span style={{float:"right", fontSize:".7rem"}}><input type="file" id="input-file" onChange={this.getFile.bind(this)} /></span>
    </h1>

    <div style={{height:"75px"}}></div>
	    
    	 <div className={eStyles.row}>
        <div className={eStyles.column + " " + eStyles.smallColumn}>
           {this.state.lessons.map(function(less, k){
            return <SelectLessonForm key={k} lesson={less} handleSelectLesson={handleSelectLesson}/>
           })}

        </div>
        <div className={eStyles.column}>

                <NewLineForm index={0} handleNewLine={handleNewLine}/>

              {this.state.lines.map(function(line, i){

                if(line.lesson === lesson){
                  
                  return <div key={i}>
                        
                          <button onClick={toggleRaw}>raw</button> > 
                                <textarea 
                                 readOnly 
                                 className={eStyles.raw} style={rawStyle}
                                 value={JSON.stringify(line)}
                                 onClick={copyTextToClipboard}
                              />

                            <div className={eStyles.row} style={{height:"400px", overflow:"scroll"}}>
                              <div className={eStyles.column}>
                                <Line index={i} data={line} update={update} style={columnStyle}/>
                                <button style={{color:"red", marginLeft:"15px"}} onClick={(e)=>{
                                  deleteLine(i)
                                }}>x</button>
                                <MoveToLessonForm index={i} lesson={line.lesson} handleMoveToLesson={moveToLesson}/>
                                
                              </div>

                            <div className={eStyles.column} style={{fontSize:"60%", paddingLeft:"15px"}}>
                              <Line index={i} data={line} read={true} style={columnStyle}/>
                            </div>

                            <NewLineForm index={i+1} handleNewLine={handleNewLine}/>
                          </div>

                       </div>
                  }
              })}

        </div>
      </div>



		</main>


</div>
    );
  }

save(){
	const txt = JSON.stringify(this.state.lines)
	localStorage.setItem(this.props.router.query.course, txt)

	// Start file download.
	this.download(this.props.router.query.course+".json",txt);
}

download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  const lines = this.placeFileContent(input.files[0]).then((lines)=>{
	  	this.setState({lines:lines, lessons: this.getLessons(lines)})
	  })

  	}
}

placeFileContent(file) {
	return this.readFileContent(file).then(content => {
  	return JSON.parse(content)
  }).catch(error => console.log(error))
}

readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

handleNewLine(e){
    e.preventDefault();

    const lineType = e.target.lineType.value
    const index = e.target.index.value

    let newState = {...this.state}

    if(lineType === "raw"){
      newState.lines.splice(index, 0, {...JSON.parse(e.target.raw.value), lesson:this.state.lesson})
    }else{
      newState.lines.splice(index, 0, {...templates[lineType], lesson:this.state.lesson})  
    }
    
    newState.lessons = this.getLessons(newState.lines)
    this.setState({...newState})
}

handleMoveToLesson(e){
    e.preventDefault();
    const lesson = parseInt(e.target.lesson.value)
    const index = e.target.index.value

    let newState = {...this.state}
    newState.lines[index].lesson = lesson
    newState.lessons = this.getLessons(newState.lines)

    this.setState({...newState})
}

handleSelectLesson(e){
    e.preventDefault();
    const id = e.target.id.value
    let newState = {...this.state}
    newState.lesson = parseInt(id)
    this.setState({...newState})
}

update(line, data){
    let newState = {...this.state}
    newState.lines[line] = {...data}
    newState.lessons = this.getLessons(newState.lines)
    this.setState(newState)
}

deleteLine(line){
    let newData = {...this.state}
    newData.lines.splice(line, 1);
    newData.lessons = this.getLessons(newData.lines)
    this.setState(newData)
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

toggleRaw(e){
  let newState = {...this.state}
  newState.showRaw = !newState.showRaw
  this.setState(newState)
}

  copyTextToClipboard(e){
    const context = e.target;
    context.select();
    document.execCommand("copy");
    alert("Copied to clipoard!" + context.value)
  }

}
export default withRouter(Editor)

/*
1-4 Ellyanna
5-11 Jeremiah
12-16 Benjamin
17-22 Rosemary

1. Summaries
2. Conclusing of Book 1 sentence

		<Quiz line={1} questions={this.state.questions} updateQuestion={updateQuestion}/>

    */
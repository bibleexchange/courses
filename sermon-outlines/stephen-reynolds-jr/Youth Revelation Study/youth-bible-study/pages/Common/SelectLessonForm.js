function SelectLessonForm({lesson, handleSelectLesson}){
  return (<div style={{ margin:"15px", width:"100%", textAlign:"center"}}>
        <form style={{ background:"none"}} onSubmit={handleSelectLesson}>
              <input type="hidden" name="id" value={lesson.id}/>
              <input style={{background:"none"}} type="submit" value={"Lesson " + lesson.id + " ("+lesson.count+")"} />
            </form></div>)
}

export default SelectLessonForm
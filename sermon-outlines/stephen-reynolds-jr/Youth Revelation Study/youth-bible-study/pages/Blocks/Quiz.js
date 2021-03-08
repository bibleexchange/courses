import styles from './../../styles/Revelation.module.css'

function Quiz(props){

	const { data, update, index, read } = props

	if(read){
		return (<ol> {props.data.questions.map(function(q,i){

			<li>QUESTION TYPES: Buzzer Question </li>

	    	const keys = q? Object.keys(q):[]
	    	return <li key={i}>

	    		{keys.map(function(k){
	    			if(k === "answers"){
	    				return q[k].map(function(ans,index){
	    					let color = "green"

	    					if(ans.points === "0" || ans.points === 0){
	    						color = "red"
	    					}
	    					return <div key={index}><p style={{color:color}}><span>{ans.text}</span><span> : {ans.points}</span></p></div>
	    				})
	    			}else{
	    				return <div key={k}><p className={"questions " + styles[k]} type="text"><span className={styles.questionLabel}>{k}: </span>{q[k]}</p></div>
	    			}
	    			
	    		})}

			      <hr/>
	    		</li>
	    })}
	    </ol>
)
	}else{
	return (<><h2><input type="text" value={props.data.title} onChange={(e)=>{
		let l = {...props.data}
		l.title = e.target.value
		update(index, l)
	}}/></h2><ol>
	    {props.data.questions.map(function(q,i){

	    	const keys = q? Object.keys(q):[]
	    	return <li key={i}>

	    		    	<button style={{color:"red", marginLeft:"15px"}} onClick={(e)=>{
			    			let newData = {...props.data}
			    			delete newData.questions[i]
			    			update(index,newData)
			    		}}>x</button>

	    		{keys.map(function(k){
	    			if(k === "answers"){
	    				return (props.data.questions[i][k].map(function(q,answerid){
	    					return <div key={answerid}><textarea className={styles.option} type="text" onChange={
						    		(e)=>{
						    			let newData = {...props.data}
						    			newData.questions[i][k][answerid].text = e.target.value
						    			update(index,newData)
						    		}} value={props.data.questions[i][k][answerid].text}></textarea><span className={styles.questionLabel}>TEXT</span>
						    		<textarea className={styles.option} type="text" onChange={
						    		(e)=>{
						    			let newData = {...props.data}
						    			newData.questions[i][k][answerid].points = e.target.value
						    			update(index,newData)
						    		}} value={props.data.questions[i][k][answerid].points}></textarea><span className={styles.questionLabel}>POINTS</span>
				    		</div>
	    				})) 

	    			}else{

	    			return <div key={k}><textarea className={styles.questions +" " + styles[k]} type="text" onChange={
			    		(e)=>{
			    			let newData = {...props.data}
			    			newData.questions[i][k] = e.target.value
			    			update(index,newData)
			    		}} value={q[k]}></textarea><span className={styles.questionLabel}>{k}</span>

			    		<button style={{color:"red", marginLeft:"15px"}} onClick={(e)=>{
			    			let newData = {...props.data}
			    			newData.questions.splice(i, 1);
			    			update(index,newData)
			    		}}>x</button>
	    		</div>
	    			}
	    		})}

	    		   <form onSubmit={(e)=>{
			      	    e.preventDefault();
					    const index = e.target.index.value
					    const prop = e.target.prop.value
					    const val = e.target.val.value

					    let newData = {...props.data}
					    newData.questions[index][prop] = val
					    update(index,newData)

	    		   }}>
	    		   	<input type="hidden" name="index" value={i} />
			        <label>
			          Key:
			          <input type="text" name="prop" />
			        </label>
			  		<label>
			          Value:
			          <input type="text" name="val"/>
			        </label>
			        <input type="submit" value="+" />
			      </form>

			      <hr/>
	    		</li>
	    })}
	    </ol>

	    	<button onClick={function(e){
	    		let newData = {...props.data}
			    newData.questions.push(quizTemplate.questions[0])
			    update(index,newData)
	    	}}>add new question</button>
	    	</>)
	    }
	    
	    }


export const quizTemplate = { type:"quiz", title:"TITLE", questions:[{
        "q": "",
        "ref": "",
        "type": "ALL_ANSWER",
        "answers": [
          {
            "text": "",
            "points": "0"
          },
          {
            "text": "",
            "points": 0
          },
          {
            "text": "",
            "points": 0
          },
          {
            "text": "",
            "points": 500
          }
          ]
      }] }

export default Quiz;